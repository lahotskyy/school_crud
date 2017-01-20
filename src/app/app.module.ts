import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list.component';
import { StudentService } from './student/student.service';
import { StudentDetailComponent } from './student/student-detail.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
