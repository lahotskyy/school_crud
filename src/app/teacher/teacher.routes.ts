import { Routes } from '@angular/router';

import { TeacherListComponent } from './teacher-list.component';

export const teacherRoutes: Routes = [
  {path: 'teachers', component: TeacherListComponent}
  // Here will be other routes like detail, new, edit
];
