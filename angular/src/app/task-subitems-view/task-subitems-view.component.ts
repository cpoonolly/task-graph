import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'task-subitems-view',
  templateUrl: './task-subitems-view.component.html',
  styleUrls: ['./task-subitems-view.component.scss']
})
export class TaskSubitemsViewComponent implements OnInit {
  @Input() task: Task;

  subTasks: Task[];
  isFilterOpen: boolean;

  constructor() {}

  ngOnInit() {
    this.isFilterOpen = false;
    this.subTasks = [
      new Task(1, 'my task'),
      new Task(2, 'my other task'),
      new Task(3, 'other task'),
      new Task(4, 'not creative with these names')
    ];
  }

  toggleFilters() {
    this.isFilterOpen = !this.isFilterOpen;
  }
}
