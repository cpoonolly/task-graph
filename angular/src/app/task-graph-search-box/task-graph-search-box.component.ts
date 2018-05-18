import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'task-graph-search-box',
  templateUrl: './task-graph-search-box.component.html',
  styleUrls: ['./task-graph-search-box.component.scss']
})
export class TaskGraphSearchBoxComponent implements OnInit {
  @Input('searchQuery') searchQuery: string;
  @Output('searchQueryChange') searchQueryChange = new EventEmitter<string>();

  public search: string;

  constructor() { }
  ngOnInit() { }

  onSearchChange() {
    this.searchQueryChange.emit(this.searchQuery);
  }
}
