import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'task-graph-header',
  templateUrl: './task-graph-header.component.html',
  styleUrls: ['./task-graph-header.component.scss']
})
export class TaskGraphHeaderComponent implements OnInit {

  @Input() isMenuOpen: boolean;
  @Output() onMenuToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.onMenuToggle.emit();
  }
}
