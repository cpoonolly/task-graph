import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  @Input() task: Task;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.route.params
      .map((params) => +params['taskId'])
      .switchMap((taskId) => {
        if (taskId) {
          return this.taskService.getTask(taskId);
        } else {
          return this.taskService.getRootTask();
        }
      })
      .subscribe((task) => {
        this.task = task;
        this.router.navigate(['task', task.taskId], {skipLocationChange: true});
      });
  }
}
