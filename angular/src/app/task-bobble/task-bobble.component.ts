import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'task-bobble',
  templateUrl: './task-bobble.component.html',
  styleUrls: ['./task-bobble.component.scss']
})
export class TaskBobbleComponent implements OnInit {
  @Input() task: Task;

  taskLetter: string;
  taskClass: string;
  taskClassList: string[];

  constructor() {
    this.taskClassList = [
      'task-bobble-color-1',
      'task-bobble-color-2',
      'task-bobble-color-3',
      'task-bobble-color-4'
    ];
  }

  ngOnInit() {
    this.taskLetter = this.task.taskName.charAt(0);
    this.taskClass = this.getRandomTaskClass();
  }

  getRandomTaskClass(): string {
    let min = 0;
    let max = this.taskClassList.length - 1;
    let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

    return this.taskClassList[randomIndex];
  }
}
