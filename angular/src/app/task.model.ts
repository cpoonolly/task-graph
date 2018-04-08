export class Task {
  taskId: number;
  taskName: string;
  taskDescription: string;

  constructor(id: number, name: string) {
    this.taskId = id;
    this.taskName = name;
  }
}
