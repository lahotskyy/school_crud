import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

import { studentRoutes } from './student/student.routes';
import { teacherRoutes } from './teacher/teacher.routes';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  ...studentRoutes,
  ...teacherRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
