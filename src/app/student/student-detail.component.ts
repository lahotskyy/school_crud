import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styles: []
})
export class StudentDetailComponent implements OnInit {

  student: Student;
  id: number;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    // this.getStudent();
  }

  // getStudent(id) {
  //   this.studentService.getStudent(id)
  //              .subscribe(
  //                data => this.student = data
  //              );
  // }
}
