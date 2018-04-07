import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGraphHeaderComponent } from './task-graph-header.component';

describe('TaskGraphHeaderComponent', () => {
  let component: TaskGraphHeaderComponent;
  let fixture: ComponentFixture<TaskGraphHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskGraphHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskGraphHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
