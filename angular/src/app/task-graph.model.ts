import { Task, ITask } from "./task.model";

export interface ITaskGraph {
  rootTaskId: number;
  tasks: ITask[];
}

export class TaskGraph {
  private static readonly GRAPH_STORAGE_KEY = "task_graph";
  private static readonly DEFAULT_TASK_NAME = "My New Task";
  private static NEXT_TASK_ID = 1;

  public readonly root: Task;
  public readonly tasks: Task[];
  public readonly tasksById: {[key: number]: Task}

  constructor(data: ITaskGraph) {
    this.tasks = [];
    this.tasksById = {};

    for (let taskData of data.tasks) {
      if (this.tasksById[taskData.taskId]) {
        throw new Error(`Duplicate task (id: ${taskData.taskId})`);
      }

      let isRoot = (taskData.taskId === data.rootTaskId);
      let task = new Task(taskData, isRoot);

      this.tasksById[taskData.taskId] = task;
      this.tasks.push(task);

      TaskGraph.NEXT_TASK_ID = Math.max(TaskGraph.NEXT_TASK_ID, task.taskId);
    }

    this.root = this.tasksById[data.rootTaskId];
    if (!this.root) {
      throw new Error(`Invalid rootTask (id:${data.rootTaskId})`);
    }

    // connect subtasks
    for (let taskData of data.tasks) {
      let task = this.tasksById[taskData.taskId];

      for (let subTaskId of taskData.subTaskIds) {
        this.linkTasks(task.taskId, subTaskId);
      }
    }
  }

  public createSubTask(parentTaskId: number): Task {
    let parentTask = this.tasksById[parentTaskId];
    let task = TaskGraph.createNewTask();

    if (!parentTask) {
      throw new Error(`Invalid parentTaskId ${parentTaskId}`);
    }

    this.tasksById[task.taskId] = task;
    this.tasks.push(task);
    this.linkTasks(parentTaskId, task.taskId);

    return task;
  }

  public deleteTask(taskId: number): Task {
    let task = this.tasksById[taskId];
    if (!task) {
      throw new Error(`Invalid taskId ${taskId}`);
    }

    Array.from(task.subTasks.values()).forEach((subTask) => {
      this.unlinkTasks(taskId, subTask.taskId); // unlink children
    });

    Array.from(task.parentTasks.values()).forEach((parentTask) => {
      this.unlinkTasks(parentTask.taskId, taskId); // unlink parents
    })

    // remove from task graph
    delete this.tasksById[task.taskId];
    this.tasks.splice(this.tasks.indexOf(task), 1);

    return task;
  }

  public unlinkTasks(parentTaskId: number, subTaskId: number): void {
    let parentTask = this.tasksById[parentTaskId];
    let subTask = this.tasksById[subTaskId];

    if (!parentTask) {
      throw new Error(`Invalid parentTaskId ${parentTaskId}`);
    } else if (!subTask) {
      throw new Error(`Invalid subTaskId ${subTaskId}`);
    } else if (!subTask.parentTasks.has(parentTask)) { // error if the tasks are already linked
      throw new Error(`task ${subTaskId} is not linked to ${parentTaskId}`);
    } else if (!parentTask.subTasks.has(subTask)) {
      throw new Error(`task ${subTaskId} is a dangling child of ${parentTaskId}`);
    }

    parentTask.subTasks.delete(subTask);
    subTask.parentTasks.delete(parentTask);
  }

  public linkTasks(parentTaskId: number, subTaskId: number): void {
    let parentTask = this.tasksById[parentTaskId];
    let subTask = this.tasksById[subTaskId];

    if (!parentTask) {
      throw new Error(`Invalid parentTaskId ${parentTaskId}`);
    } else if (!subTask) {
      throw new Error(`Invalid subTaskId ${subTaskId}`);
    } else if (parentTask.subTasks.has(subTask)) { // error if the tasks are already linked
      throw new Error(`task ${subTaskId} is already linked to ${parentTaskId}`);
    } else if (subTask.parentTasks.has(parentTask)) {
      throw new Error(`task ${subTaskId} is a dangling child of ${parentTaskId}`);
    }

    parentTask.subTasks.add(subTask);
  }

  public saveTaskGraph(): void {
    let taskGraphJson = JSON.stringify({
      rootTaskId: this.root.taskId,
      tasks: this.tasks.map((task) => task.getTaskData())
    });

    localStorage.setItem(TaskGraph.GRAPH_STORAGE_KEY, taskGraphJson);
  }

  public static loadTaskGraph(): TaskGraph {
    let storedTaskGraph = localStorage.getItem(TaskGraph.GRAPH_STORAGE_KEY);

    if (storedTaskGraph) {
      return new TaskGraph(<ITaskGraph> JSON.parse(storedTaskGraph));
    } else {
      let rootTask = TaskGraph.createNewTask();

      return new TaskGraph({
        rootTaskId: rootTask.taskId,
        tasks: [rootTask.getTaskData()]
      });
    }
  }

  private static createNewTask(): Task {
    let nextTaskId = TaskGraph.NEXT_TASK_ID++;

    return new Task({
      taskId: nextTaskId,
      taskName: `${TaskGraph.DEFAULT_TASK_NAME}: ${nextTaskId}`,
      subTaskIds: []
    });
  }
}
