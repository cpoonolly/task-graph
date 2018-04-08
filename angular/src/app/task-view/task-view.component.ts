import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  @Input() task: Task;

  constructor() { }
  ngOnInit() { }
}
