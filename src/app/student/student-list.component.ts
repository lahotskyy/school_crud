import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentDetailComponent } from './student-detail.component';
import { StudentService } from './student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styles: [`
      table {
        border-collapse: collapse;
        border: 1px solid black;
      }
      th, td {
        border: 1px solid black;
      }
  `]
})
export class StudentListComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents()
                       .subscribe(
                         data => this.students = data,
                         err => console.error(err)
                        );
  }
}
