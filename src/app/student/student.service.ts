import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Student } from './student.model';

// Import .map operator
import 'rxjs/Rx';

@Injectable()
export class StudentService {

  private studentsUrl = 'http://localhost:3000/students';

  constructor(private http: Http) {}

  getStudents (): Observable<Student[]> {
    return this.http.get(this.studentsUrl)
                    .map(res => res.json());
  }
}
