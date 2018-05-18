import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'task/1', pathMatch: 'full' },
  { path: 'task/:taskId', component: TaskViewComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
