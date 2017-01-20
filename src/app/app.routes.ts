import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student/student-list.component';
import { TeacherListComponent } from './teacher/teacher-list.component';

export const routes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: 'teachers', component: TeacherListComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
