import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-subitems-view',
  templateUrl: './task-subitems-view.component.html',
  styleUrls: ['./task-subitems-view.component.scss']
})
export class TaskSubitemsViewComponent implements OnInit {
  @Input() task: Task;

  subTasks: Task[];
  isFilterOpen: boolean;

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.isFilterOpen = false;
    this.subTasks = Array.from(this.task.subTasks.values());
  }

  toggleFilters() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  addSubTask() {
    this.taskService.createNewTask(this.task.taskId).subscribe(
      (newTask) => this.subTasks = Array.from(this.task.subTasks.values())
    );
  }
}
