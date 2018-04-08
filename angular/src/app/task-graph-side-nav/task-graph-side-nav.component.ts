import { Component, OnInit } from '@angular/core';

class Task {
  taskName: string;
  taskDescription: string;

  constructor(name: string, description: string) {
    this.taskName = name;
    this.taskDescription = description;
  }
}

@Component({
  selector: 'task-graph-side-nav',
  templateUrl: './task-graph-side-nav.component.html',
  styleUrls: ['./task-graph-side-nav.component.scss']
})
export class TaskGraphSideNavComponent implements OnInit {
  taskList: Task[];

  constructor() {
    this.taskList = [
      new Task('Pepper', 'peppa'),
      new Task('Salt', 'saltaaay'),
      new Task('Paprika', 'achew'),
      new Task('Pepper1', 'peppsa'),
      new Task('Salt2', 'saltaaasssdy'),
      new Task('Papriksda', 'achdsew'),
      new Task('Peppesdfr', 'peppdsa'),
      new Task('Sadslt', 'ssadsfasltaaay'),
      new Task('Papfdsrika', 'achesadw')
    ];
  }

  ngOnInit() {}
}
