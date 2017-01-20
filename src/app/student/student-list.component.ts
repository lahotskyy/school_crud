import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentDetailComponent } from './student-detail.component';
import { StudentService } from './student.service';


@Component({
  selector: 'app-student-list',
  template: `
    <p *ngFor="let student of students">
    {{student.first_name}} {{student.last_name}} {{student.age}}
    </p>
    <app-student-detail></app-student-detail>
  `,
  styles: []
})
export class StudentListComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService) { }

  getStudents() {
    this.studentService.getStudents().then(students => this.students = students);
  }
  ngOnInit() {
    this.getStudents();
  }

}
