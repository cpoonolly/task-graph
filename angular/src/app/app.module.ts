import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
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
import { TaskService } from './task.service';
import { AppRoutingModule } from './/app-routing.module';
import { TaskEditModalComponent } from './task-edit-modal/task-edit-modal.component';
import { TaskSearchFilterPipe } from './task-graph-side-nav/task-search-filter.pipe';
// import { TaskFieldEditComponent } from './task-field-edit/task-field-edit.component';

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
    TaskGraphSearchBoxComponent,
    TaskEditModalComponent,
    TaskSearchFilterPipe
    // TaskFieldEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    MarkdownModule.forRoot(),
    AppRoutingModule
  ],
  entryComponents: [
    TaskEditModalComponent
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
