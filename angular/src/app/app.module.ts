import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-md';

import { AppComponent } from './app.component';
import { TaskGraphToolbarComponent } from './task-graph-toolbar/task-graph-toolbar.component';
import { TaskGraphSideNavComponent } from './task-graph-side-nav/task-graph-side-nav.component';
import { TaskBobbleComponent } from './task-bobble/task-bobble.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskSubitemsViewComponent } from './task-subitems-view/task-subitems-view.component';
import { TasksFiltersComponent } from './tasks-filters/tasks-filters.component';
import { TaskGraphSearchBoxComponent } from './task-graph-search-box/task-graph-search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskGraphToolbarComponent,
    TaskGraphSideNavComponent,
    TaskBobbleComponent,
    TaskViewComponent,
    TaskDetailsComponent,
    TaskSubitemsViewComponent,
    TasksFiltersComponent,
    TaskGraphSearchBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
