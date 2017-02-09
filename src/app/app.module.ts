import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list.component';
import { StudentNewComponent } from './student/student-new.component';
import { StudentService } from './student/student.service';
import { TeacherListComponent } from './teacher/teacher-list.component';
import { TeacherService } from './teacher/teacher.service';
import { HomeComponent } from './home.component';

import { routing } from './app.routes';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentNewComponent,
    TeacherListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [
    StudentService,
    TeacherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
