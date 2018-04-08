import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  task: Task;

  constructor() { }
  ngOnInit() {
    this.task = new Task('My Task', 'My Tasks Description');
  }
}
