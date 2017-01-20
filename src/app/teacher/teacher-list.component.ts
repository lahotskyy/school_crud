import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher.model';
import { TeacherDetailComponent } from './teacher-detail.component';
import { TeacherService } from './teacher.service';


@Component({
  selector: 'app-teacher-list',
  template: `
    <p *ngFor="let teacher of teachers">
    {{teacher.first_name}} {{teacher.last_name}} {{teacher.group}}
    </p>
    <app-teacher-detail></app-teacher-detail>
  `,
  styles: []
})
export class TeacherListComponent implements OnInit {

  teachers: Teacher[];

  constructor(private teacherService: TeacherService) { }

  getTeachers() {
    this.teacherService.getTeachers().then(teachers => this.teachers = teachers);
  }
  ngOnInit() {
    this.getTeachers();
  }

}
