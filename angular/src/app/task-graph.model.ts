import { Task, ITask } from "./task.model";

export interface ITaskGraph {
  rootTaskId: number;
  tasks: ITask[];
}

export class TaskGraph {
  public readonly root: Task;
  public readonly tasks: {[key: number]: Task}

  constructor(data: ITaskGraph) {
    this.tasks = {};
    for (let taskData of data.tasks) {
      if (this.tasks[taskData.taskId]) {
        throw new Error(`Duplicate task (id: ${taskData.taskId})`);
      }

      this.tasks[taskData.taskId] = new Task(taskData);
    }

    this.root = this.tasks[data.rootTaskId];
    if (!this.root) {
      throw new Error(`Invalid rootTask (id:${data.rootTaskId})`);
    }

    // connect subtasks
    for (let taskData of data.tasks) {
      let task = this.tasks[taskData.taskId];

      for (let subTaskId of taskData.subTaskIds) {
        let subTask = this.tasks[subTaskId];

        if (!subTask) {
          throw new Error(`Invalid subTask (id:${subTaskId}) in task (id: ${task.taskId})`);
        } else if (task.subTasks.has(subTask)) {
          throw new Error(`Duplicate subTask (id: ${subTaskId}) in task (id:${task.taskId})`);
        }

        task.subTasks.add(subTask);
        subTask.parentTasks.add(task);
      }
    }
  }

  public getAllTasks(): Task[] {
    return Object.keys(this.tasks).map(key => this.tasks[key]);
  }
}
