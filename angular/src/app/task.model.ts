export class TaskGraphNode {
  public readonly id: number;
  public readonly taskId: number;
  public readonly connections: TaskGraphNode[];
}

export class TaskGraph {
  private root: TaskGraphNode;
  private nodes: {[key: number]: TaskGraphNode};
  private tasks: {[key: number]: Task}
}

export class Task {
  public readonly taskId: number;
  public readonly taskName: string;
  public readonly fields: TaskField[];

  constructor(id: number, name: string) {
    this.taskId = id;
    this.taskName = name;
    this.fields = [];
  }
}

export enum TaskFieldType {
  TEXT_SHORT,
  TEXT_LONG,
  INTEGER,
  DECIMAL,
  MONEY,
  DATE
}

export class TaskField {
  public fieldName: string;
  public fieldType: TaskFieldType;
  public value: any;

  constructor(name: string, type: TaskFieldType, value: any) {
    this.fieldName = name;
    this.fieldType = type;
    this.value = value;
  }

  public clone(): TaskField {
    return new TaskField(this.fieldName, this.fieldType, this.value);
  }
}
