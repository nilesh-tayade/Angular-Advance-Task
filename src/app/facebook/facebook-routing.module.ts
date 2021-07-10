import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { FacebookAddPostComponent } from './facebook-add-post/facebook-add-post.component';
import { FacebookDashboardComponent } from './facebook-dashboard/facebook-dashboard.component';
import { FacebookHomeComponent } from './facebook-home/facebook-home.component';
import { FacebookUserListComponent } from './facebook-user-list/facebook-user-list.component';

const routes: Routes = [
  {path:'' ,component:FacebookDashboardComponent,children:[
    {path:'home',component:FacebookHomeComponent},
    {path:'user-list',component:FacebookUserListComponent},
        {path:'add-user',component:AddUserComponent},
    {path:'add-post/:id',component:FacebookAddPostComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookRoutingModule { }
