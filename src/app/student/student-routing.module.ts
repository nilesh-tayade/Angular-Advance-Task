import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentViewComponent } from './student-view/student-view.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent,children:[
    {path:'student-add',component:StudentAddComponent},
    {path:'student-update/:id',component:StudentUpdateComponent},
    {path:'student-view/:id',component:StudentViewComponent},
    {path:'student-list',component:StudentListComponent},

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
