import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tasks-filters',
  templateUrl: './tasks-filters.component.html',
  styleUrls: ['./tasks-filters.component.scss']
})
export class TasksFiltersComponent implements OnInit {
  @Input() isFilterOpen: boolean;

  constructor() { }
  ngOnInit() {}
}
