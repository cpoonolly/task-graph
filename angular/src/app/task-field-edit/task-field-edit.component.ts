import { Component, OnInit, Input } from '@angular/core';
import { TaskField, Task } from '../task.model';

@Component({
  selector: 'task-field-edit',
  templateUrl: './task-field-edit.component.html',
  styleUrls: ['./task-field-edit.component.scss']
})
export class TaskFieldEditComponent implements OnInit {
  @Input() task: Task;
  @Input() taskField: TaskField;

  constructor() { }
  ngOnInit() { }
}
