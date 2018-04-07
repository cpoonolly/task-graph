import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { TaskGraphHeaderComponent } from './task-graph-header/task-graph-header.component';
import { TaskGraphSideNavComponent } from './task-graph-side-nav/task-graph-side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskGraphHeaderComponent,
    TaskGraphSideNavComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
