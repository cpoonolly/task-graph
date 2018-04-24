import { Injectable } from '@angular/core';
import { TaskGraph, ITaskGraph } from './task-graph.model';
import { Task, ITask } from './task.model';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class TaskService {
  private static readonly GRAPH_STORAGE_KEY = "task_graph";
  private static readonly DEFAULT_TASK_NAME = "My New Task";

  private autoIncrementTaskId = 1;
  private taskGraph: TaskGraph;

  constructor() { }

  public getTaskGraph(): Observable<TaskGraph> {
    if (this.taskGraph) {
      return Observable.of(this.taskGraph);
    }

    return this.loadGraph();
  }

  public loadGraph(): Observable<TaskGraph> {
    let storedTaskGraph = localStorage.getItem(TaskService.GRAPH_STORAGE_KEY);

    // load from localStorage if present otherwise create from scratch
    try {
      if (storedTaskGraph) {
        this.taskGraph = new TaskGraph(<ITaskGraph> JSON.parse(storedTaskGraph));
      } else {
        this.taskGraph = new TaskGraph(this.generateTaskGraphData());
      }

      return Observable.of(this.taskGraph);
    } catch (e) {
      return Observable.throw(e);
    }
  }

  public getRootTask(): Observable<Task> {
    return Observable.of(this.taskGraph.root);
  }

  public getTask(taskId: number): Observable<Task> {
    let task = this.taskGraph.tasks[taskId];

    if (!task) {
      return Observable.throw(`Invalid taskId ${taskId}`);
    }

    return Observable.of(task);
  }

  public createNewTask(parentTaskId: number): Observable<Task> {
    let parentTask = this.taskGraph.tasks[parentTaskId];

    if (!parentTask) {
      return Observable.throw(`Invalid parentTaskId ${parentTaskId}`);
    }

    return Observable.of(new Task(this.generateTaskData()))
      .pipe(mergeMap((newTask) => {
        this.taskGraph.tasks[newTask.taskId] = newTask;

        return this.linkTasks(parentTaskId, newTask.taskId);
      }));
  }

  public deleteTask(taskId: number): Observable<Task> {
    let task = this.taskGraph.tasks[taskId];
    let unlinkObservables: Observable<Task>[];

    if (!task) {
      return Observable.throw(`Invalid taskId ${taskId}`);
    }

    // unlink children
    for (let subTask of Array.from(task.subTasks.values())) {
      unlinkObservables.push(this.unlinkTasks(taskId, subTask.taskId));
    }

    // unlink parents
    for (let parentTask of Array.from(task.parentTasks.values())) {
      unlinkObservables.push(this.unlinkTasks(parentTask.taskId, taskId))
    }

    return Observable.of(...unlinkObservables)
      .pipe(mergeMap(() => Observable.of(task)));
  }

  public linkTasks(parentTaskId: number, subTaskId: number): Observable<Task> {
    let parentTask = this.taskGraph.tasks[parentTaskId];
    let subTask = this.taskGraph.tasks[subTaskId];

    // error if the tasks are already linked
    for (let task of Array.from(parentTask.subTasks.values())) { // this is how you iterate a set yuck..
      if (task.taskId === subTaskId) {
        return Observable.throw(`task ${subTaskId} is already linked to ${parentTaskId}`);
      }
    }

    parentTask.subTasks.add(subTask);
    return Observable.of(subTask);
  }

  public unlinkTasks(parentTaskId: number, subTaskId: number): Observable<Task> {
    let parentTask = this.taskGraph.tasks[parentTaskId];
    let subTask = this.taskGraph.tasks[subTaskId];

    if (!parentTask) {
      return Observable.throw(`Invalid parentTaskId ${parentTaskId}`);
    } else if (!subTask) {
      return Observable.throw(`Invalid subTaskId ${subTaskId}`);
    }

    parentTask.subTasks.delete(subTask);
    subTask.parentTasks.delete(parentTask);

    return Observable.of(subTask);
  }

  private generateTaskData(): ITask {
    return {
      taskId: this.getNextTaskId(),
      taskName: TaskService.DEFAULT_TASK_NAME,
      subTaskIds: []
    }
  }

  private generateTaskGraphData(): ITaskGraph {
    let rootTask = this.generateTaskData();

    return {rootTaskId: rootTask.taskId, tasks: [rootTask]};
  }

  private getNextTaskId() {
    return this.autoIncrementTaskId++;
  }
}
