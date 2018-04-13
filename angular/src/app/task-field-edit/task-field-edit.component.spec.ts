import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFieldEditComponent } from './task-field-edit.component';

describe('TaskFieldEditComponent', () => {
  let component: TaskFieldEditComponent;
  let fixture: ComponentFixture<TaskFieldEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFieldEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFieldEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
