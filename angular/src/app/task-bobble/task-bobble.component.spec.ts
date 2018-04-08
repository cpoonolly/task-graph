import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBobbleComponent } from './task-bobble.component';

describe('TaskBobbleComponent', () => {
  let component: TaskBobbleComponent;
  let fixture: ComponentFixture<TaskBobbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskBobbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBobbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
