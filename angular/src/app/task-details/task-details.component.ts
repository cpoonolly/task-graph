import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../task.model';

@Component({
  selector: 'task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  @Input() task: Task;

  isInEditMode: boolean = false;
  taskEditForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.taskEditForm = new FormGroup({
      'name': new FormControl(this.task.taskName, [
        Validators.required,
        Validators.minLength(1)
      ]),
      'description': new FormControl(this.task.taskDescription || '')
    });
  }

  toggleEditMode() {
    this.isInEditMode = !this.isInEditMode;
  }

  submitChanges() {
    const formModel = this.taskEditForm.value;

    this.task.taskName = formModel.name as string;
    this.task.taskDescription = formModel.description as string;

    this.toggleEditMode();
    this.initializeForm();
  }
}
