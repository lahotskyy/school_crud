import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list.component';
import { StudentService } from './student/student.service';
import { StudentDetailComponent } from './student/student-detail.component';
import { TeacherListComponent } from './teacher/teacher-list.component';
import { TeacherService } from './teacher/teacher.service';
import { TeacherDetailComponent } from './teacher/teacher-detail.component';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailComponent,
    TeacherListComponent,
    TeacherDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    StudentService,
    TeacherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
