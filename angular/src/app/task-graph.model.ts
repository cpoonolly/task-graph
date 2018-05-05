import { Task, ITask } from "./task.model";

export interface ITaskGraph {
  rootTaskId: number;
  tasks: ITask[];
}

export class TaskGraph {
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

      let task = new Task(taskData);

      this.tasksById[taskData.taskId] = task;
      this.tasks.push(task);
    }

    this.root = this.tasksById[data.rootTaskId];
    if (!this.root) {
      throw new Error(`Invalid rootTask (id:${data.rootTaskId})`);
    }

    // connect subtasks
    for (let taskData of data.tasks) {
      let task = this.tasksById[taskData.taskId];

      for (let subTaskId of taskData.subTaskIds) {
        let subTask = this.tasksById[subTaskId];

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
}
