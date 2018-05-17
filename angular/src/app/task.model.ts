export interface ITask {
  taskId: number;
  taskName: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  subTaskIds: number[];
}

export class Task {
  private static readonly DEFAULT_TASK_NAME = "My New Task";
  private static LAST_TASK_ID = 1;

  public readonly taskId: number;
  public taskName: string;
  public description?: string;
  public startDate?: Date;
  public endDate?: Date;
  public subTasks: Set<Task>;
  public parentTasks: Set<Task>;
  // public fields: TaskField[]; Not using this now

  constructor(data: ITask) {
    this.taskId = data.taskId;
    this.taskName = data.taskName;
    this.description = data.description;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.subTasks = new Set<Task>();
    this.parentTasks = new Set<Task>();
    // this.fields = []; Not using this now
  }

  public getTaskData(): ITask {
    return {
      taskId: this.taskId,
      taskName: this.taskName,
      description: this.description,
      startDate: this.startDate,
      endDate: this.endDate,
      subTaskIds: Array.from(this.subTasks.values()).map((task) => task.taskId)
    };
  }

  public static createNewTask(): Task {
    return new Task({
      taskId: Task.getNextTaskId(),
      taskName: Task.DEFAULT_TASK_NAME,
      subTaskIds: []
    });
  }

  private static getNextTaskId(): number {
    return Task.LAST_TASK_ID++;
  }
}
