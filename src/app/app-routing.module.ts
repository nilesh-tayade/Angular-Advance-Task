import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'employee',loadChildren: () => import('src/app/employee/employee.module').then(m => m.EmployeeModule)},
  {path:'student',loadChildren: () => import('src/app/student/student.module').then(m => m.StudentModule)},
  {path:'facebook',loadChildren: () => import('src/app/facebook/facebook.module').then(m => m.FacebookModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
