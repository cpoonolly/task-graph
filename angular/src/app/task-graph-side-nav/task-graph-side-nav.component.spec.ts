import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGraphSideNavComponent } from './task-graph-side-nav.component';

describe('TaskGraphSideNavComponent', () => {
  let component: TaskGraphSideNavComponent;
  let fixture: ComponentFixture<TaskGraphSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskGraphSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskGraphSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
