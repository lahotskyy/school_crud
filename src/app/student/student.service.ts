import { Injectable } from '@angular/core';
import { STUDENTS } from './student-mock';

@Injectable()
export class StudentService {
  getStudents() {
    return Promise.resolve(STUDENTS);
  }

}
