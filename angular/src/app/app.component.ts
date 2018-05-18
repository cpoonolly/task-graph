import { Component, ViewChild } from '@angular/core';
import { TaskGraph } from './task-graph.model';
import { TaskService } from './task.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  taskGraph: TaskGraph;

  @ViewChild(MatSidenav)
  public sideNav: MatSidenav;

  constructor(
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.getTaskGraph().subscribe((taskGraph) => {
      this.taskGraph = taskGraph;
    });

    this.router.events.subscribe(() => {
      this.sideNav.close();
    });
  }
}
