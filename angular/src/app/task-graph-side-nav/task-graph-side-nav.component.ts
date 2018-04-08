import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'task-graph-side-nav',
  templateUrl: './task-graph-side-nav.component.html',
  styleUrls: ['./task-graph-side-nav.component.scss']
})
export class TaskGraphSideNavComponent implements OnInit {
  taskList: Task[];

  constructor() {
    this.taskList = [
      new Task(1, 'Pepper'),
      new Task(2, 'Salt'),
      new Task(3, 'Paprika'),
      new Task(4, 'Pepper1'),
      new Task(5, 'Salt2'),
      new Task(6, 'Papriksda'),
      new Task(7, 'Peppesdfr'),
      new Task(8, 'Sadslt'),
      new Task(9, 'Papfdsrika')
    ];
  }

  ngOnInit() {}
}
