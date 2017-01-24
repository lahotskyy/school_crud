import { Routes } from '@angular/router';

import { StudentListComponent } from './student-list.component';

export const studentRoutes: Routes = [
  {path: 'students', component: StudentListComponent}
  // Here will be other routes like detail, new, edit
];
