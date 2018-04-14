import { FormControl } from "@angular/forms";
import { TaskFieldType } from "../task.model";

export class TaskFieldEditFormControl extends FormControl {
  public fieldName: string;
  public fieldType: TaskFieldType;

  constructor(fieldName: string, fieldType: TaskFieldType, value: any) {
    super(value);

    this.fieldName = fieldName;
    this.fieldType = fieldType;
  }
}
