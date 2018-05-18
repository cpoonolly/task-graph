import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { TaskEditModalComponent } from '../task-edit-modal/task-edit-modal.component';

@Component({
  selector: 'task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  @Input() task: Task;

  editModalRef: MatDialogRef<TaskEditModalComponent> = null;
  taskMarkdown: string;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.task = changes.task.currentValue;
    this.taskMarkdown = (this.task.description ? this.task.description : '');
  }

  openEditModal() {
    if (this.editModalRef !== null) {
      return;
    }

    this.editModalRef = this.dialog.open(TaskEditModalComponent, {
      width: '600px',
      height: '400px',
      data: {taskId: this.task.taskId}
    });

    this.editModalRef.afterClosed().subscribe(() => {
      this.editModalRef = null;
      this.taskMarkdown = (this.task.description ? this.task.description : '');
    });
  }
}
