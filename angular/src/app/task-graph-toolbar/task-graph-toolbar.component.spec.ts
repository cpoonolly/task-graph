import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGraphToolbarComponent } from './task-graph-toolbar.component';

describe('TaskGraphToolbarComponent', () => {
  let component: TaskGraphToolbarComponent;
  let fixture: ComponentFixture<TaskGraphToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskGraphToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskGraphToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
