import { Component } from '@angular/core';
import { Task } from './task.model';
import { TaskGraph } from './task-graph.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  taskGraph: TaskGraph;
  task: Task;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.getTaskGraph().subscribe((taskGraph) => {
      this.taskGraph = taskGraph;
      this.task = taskGraph.root;
    });
  }
}
