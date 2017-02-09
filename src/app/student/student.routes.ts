import { Routes } from '@angular/router';

import { StudentListComponent } from './student-list.component';
import { StudentNewComponent } from './student-new.component';

export const studentRoutes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: 'students/new', component: StudentNewComponent},
  // Here will be other routes like detail, new, edit
];
