import { FormControl } from "@angular/forms";

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
  public taskName: string;
  public description: string;
  public startDate: Date;
  public endDate: Date;
  public fields: TaskField[];

  constructor(id: number, name: string) {
    this.taskId = id;
    this.taskName = name;
    this.description;
    this.fields = [];
  }
}

/* Not using this now maybe we will someday in the future */
export enum TaskFieldType {
  TEXT_SHORT,
  TEXT_LONG,
  INTEGER,
  DECIMAL,
  MONEY,
  DATE
}

export class TaskField {
  public key: string;
  public fieldName: string;
  public fieldType: TaskFieldType;
  public value: any;

  constructor(key: string, name: string, type: TaskFieldType, value: any) {
    this.key = key;
    this.fieldName = name;
    this.fieldType = type;
    this.value = value;
  }
}
