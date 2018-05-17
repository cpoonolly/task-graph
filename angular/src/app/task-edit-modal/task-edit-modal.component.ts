import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'task-edit-modal',
  templateUrl: './task-edit-modal.component.html',
  styleUrls: ['./task-edit-modal.component.scss']
})
export class TaskEditModalComponent implements OnInit {
  taskId: number;
  task: Task;
  taskEditForm: FormGroup;
  taskStartDateControl: FormControl;
  taskEndDateControl: FormControl
  descriptionMinRows = 5;

  constructor(
    private taskService: TaskService,
    public dialogRef: MatDialogRef<TaskEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.taskId = data.taskId;
  }

  ngOnInit() {
    this.taskService.getTask(this.taskId).subscribe((task) => {
      this.task = task;
      this.initializeForm();
    });
  }

  initializeForm() {
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
  }

  cancelChanges() {
    this.dialogRef.close();
  }

  saveChanges() {
    const formModel = this.taskEditForm.value;

    this.task.taskName = formModel.name as string;
    this.task.description = formModel.description as string;
    this.task.startDate = formModel.startDate as Date;
    this.task.endDate = formModel.endDate as Date;

    this.taskService.saveTaskGraph().subscribe(() => {
      this.dialogRef.close();
    });
  }
}
