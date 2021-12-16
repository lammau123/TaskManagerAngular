import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    TaskComponent,
    TaskFormComponent,
    PaginatorComponent,
    UploadTaskComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
