export interface ITask {
  taskId: number;
  taskName: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  subTaskIds: number[];
}

export class Task {
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
}
