import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { TaskGraph } from '../task-graph.model';

@Component({
  selector: 'task-graph-side-nav',
  templateUrl: './task-graph-side-nav.component.html',
  styleUrls: ['./task-graph-side-nav.component.scss']
})
export class TaskGraphSideNavComponent implements OnInit {
  taskGraph: TaskGraph;
  taskList: Task[];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.getTaskGraph().subscribe((taskGraph) => {
      this.taskGraph = taskGraph;
      this.taskList = taskGraph.getAllTasks();
    });
  }
}
