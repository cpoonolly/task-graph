import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGraphSearchBoxComponent } from './task-graph-search-box.component';

describe('TaskGraphSearchBoxComponent', () => {
  let component: TaskGraphSearchBoxComponent;
  let fixture: ComponentFixture<TaskGraphSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskGraphSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskGraphSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
