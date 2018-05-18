import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { TaskGraph } from '../task-graph.model';

@Component({
  selector: 'task-graph-side-nav',
  templateUrl: './task-graph-side-nav.component.html',
  styleUrls: ['./task-graph-side-nav.component.scss']
})
export class TaskGraphSideNavComponent implements OnInit {
  @Input() taskGraph: TaskGraph;

  public taskList: Task[];
  public searchQuery: string;

  constructor() { }

  ngOnInit() {
    this.taskList = this.taskGraph.tasks;
  }
}
