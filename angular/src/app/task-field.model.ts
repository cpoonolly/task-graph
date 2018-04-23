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
