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
    this.subTasks = Array.from(this.task.subTasks.values());
  }

  toggleFilters() {
    this.isFilterOpen = !this.isFilterOpen;
  }
}
