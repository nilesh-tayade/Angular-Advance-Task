import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {path:'' ,component:EmployeeDashboardComponent,children:[
    {path:'add-employee',component:AddEmployeeComponent},
    {path:'update-employee/:id',component:UpdateEmployeeComponent},
    {path:'view-employee/:id',component:ViewEmployeeComponent},
    {path:'employee-list',component:EmployeeListComponent},
    {path:'upload-image/:id',component:UploadImageComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
