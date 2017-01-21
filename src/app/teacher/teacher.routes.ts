import { Routes } from '@angular/router';

import { TeacherListComponent } from './teacher-list.component';
import { TeacherDetailComponent } from './teacher-detail.component';

export const teacherRoutes: Routes = [
  {path: 'teachers', component: TeacherListComponent},
  {path: 'teachers/:id', component: TeacherDetailComponent}
];
