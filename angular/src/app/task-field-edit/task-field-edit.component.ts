import { Component, OnInit, Input } from '@angular/core';
import { TaskField, Task, TaskFieldType } from '../task.model';
import { TaskFieldEditFormControl } from './task-field-edit-form-control.model';
import { FormGroup, FormControl } from '@angular/forms';

export interface ITaskFieldTypeOption {
  label: string,
  value: TaskFieldType
}

@Component({
  selector: 'task-field-edit',
  templateUrl: './task-field-edit.component.html',
  styleUrls: ['./task-field-edit.component.scss']
})
export class TaskFieldEditComponent implements OnInit {
  @Input() taskField: TaskField;
  @Input() form: FormGroup;

  public formControlName: string;
  public fieldName: string;
  public fieldType: TaskFieldType;
  public value: any;

  public fieldTypeOptions: ITaskFieldTypeOption[];

  constructor() { }

  ngOnInit() {
    this.formControlName = this.taskField.key;
    this.fieldName = this.taskField.fieldName;
    this.fieldType = this.taskField.fieldType;
    this.value = this.taskField.value;
    this.fieldTypeOptions = [];

    // get a list of all the enum options
    for (let enumKey of Object.keys(TaskFieldType)) {
      if (!isNaN(Number(enumKey))) {
        this.fieldTypeOptions.push({
          label: TaskFieldType[enumKey] as string,
          value: TaskFieldType[enumKey] as TaskFieldType
        });
      }
    }

    this.form.addControl(this.formControlName, new FormControl(this.value));
  }
}
