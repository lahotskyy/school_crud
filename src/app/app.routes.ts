import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student/student-list.component';
import { StudentDetailComponent } from './student/student-detail.component';

export const routes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: 'students/:id', component: StudentDetailComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
