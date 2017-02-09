import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';


@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styles: []
})
export class StudentNewComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

}
