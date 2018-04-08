export class Task {
  taskName: string;
  taskDescription: string;

  constructor(name: string, description: string) {
    this.taskName = name;
    this.taskDescription = description;
  }
}
