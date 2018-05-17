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
    try {
      this.taskGraph = TaskGraph.loadTaskGraph();

      return Observable.of(this.taskGraph);
    } catch (e) {
      return Observable.throw(e);
    }
  }

  public getRootTask(): Observable<Task> {
    return Observable.of(this.taskGraph.root);
  }

  public getTask(taskId: number): Observable<Task> {
    let task = this.taskGraph.tasksById[taskId];

    if (!task) {
      return Observable.throw(`Invalid taskId ${taskId}`);
    }

    return Observable.of(task);
  }

  public createNewTask(parentTaskId: number): Observable<Task> {
    try {
      let createdTask = this.taskGraph.createSubTask(parentTaskId);
      this.taskGraph.saveTaskGraph();

      return Observable.of(createdTask);
    } catch (e) {
      return Observable.throw(e);
    }
  }

  public deleteTask(taskId: number): Observable<Task> {
    try {
      let deletedTask = this.taskGraph.deleteTask(taskId);
      this.taskGraph.saveTaskGraph();

      return Observable.of(deletedTask);
    } catch (e) {
      return Observable.throw(e);
    }
  }

  public linkTasks(parentTaskId: number, subTaskId: number): Observable<void> {
    try {
      this.taskGraph.linkTasks(parentTaskId, subTaskId);
      this.taskGraph.saveTaskGraph();

      return Observable.of();
    } catch (e) {
      return Observable.throw(e);
    }
  }

  public unlinkTasks(parentTaskId: number, subTaskId: number): Observable<void> {
    try {
      this.taskGraph.unlinkTasks(parentTaskId, subTaskId);
      this.taskGraph.saveTaskGraph();

      return Observable.of();
    } catch (e) {
      return Observable.throw(e);
    }
  }

  public saveTaskGraph(): Observable<TaskGraph> {
    try {
      this.taskGraph.saveTaskGraph();

      return Observable.of(this.taskGraph);
    } catch (e) {
      return Observable.throw(e);
    }
  }
}
