import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'task-graph-toolbar',
  templateUrl: './task-graph-toolbar.component.html',
  styleUrls: ['./task-graph-toolbar.component.scss']
})
export class TaskGraphToolbarComponent implements OnInit {
  @Output() menuClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onMenuClick() {
    this.menuClick.emit();
  }
}
