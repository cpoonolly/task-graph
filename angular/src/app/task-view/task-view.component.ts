import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.model';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  @Input() task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    if (!this.task) {
      this.loadTaskFromPath();
    }
  }

  loadTaskFromPath() {
    const taskId = +this.route.snapshot.paramMap.get('taskId');

    if (taskId) {
      this.taskService.getTask(taskId).subscribe((task) => this.task = task);
    } else {
      this.taskService.getRootTask().subscribe((task) => this.task = task);
    }
  }
}
