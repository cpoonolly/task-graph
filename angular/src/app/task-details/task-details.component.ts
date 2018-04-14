import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task, TaskField, TaskFieldType } from '../task.model';
import { TaskFieldEditFormControl } from '../task-field-edit/task-field-edit-form-control.model';

@Component({
  selector: 'task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  @Input() task: Task;

  isEditModeEnabled: boolean = false;
  taskEditForm: FormGroup;
  taskStartDateControl: FormControl;
  taskEndDateControl: FormControl
  taskFields: TaskField[];

  constructor() { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.taskFields = [];

    this.taskStartDateControl = new FormControl(this.task.startDate || new Date());
    this.taskEndDateControl = new FormControl(this.task.endDate || new Date());
    this.taskEditForm = new FormGroup({
      'name': new FormControl(this.task.taskName, [
        Validators.required,
        Validators.minLength(1)
      ]),
      'description': new FormControl(this.task.description),
      'startDate': this.taskStartDateControl,
      'endDate': this.taskEndDateControl
    });

    this.taskFields = [...this.task.fields];
  }

  enableEditMode() {
    this.isEditModeEnabled = true;
    this.initializeForm();
  }

  disableEditMode() {
    this.isEditModeEnabled = false;
  }

  addField() {
    let key = `task_${this.task.taskId}_field_${this.taskFields.length}`;
    let fieldName = `Field #${this.taskFields.length}`;
    let fieldType = TaskFieldType.TEXT_SHORT;
    let field = new TaskField(key, fieldName, fieldType, '');

    this.taskFields.push(field);
  }

  submitChanges() {
    const formModel = this.taskEditForm.value;

    this.task.taskName = formModel.name as string;
    this.task.description = formModel.description as string;
    this.task.startDate = formModel.startDate as Date;
    this.task.endDate = formModel.endDate as Date;

    this.disableEditMode();
  }
}
