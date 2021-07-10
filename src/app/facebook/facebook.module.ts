import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookDashboardComponent } from './facebook-dashboard/facebook-dashboard.component';
import { FacebookHomeComponent } from './facebook-home/facebook-home.component';
import { FacebookSidebarComponent } from './facebook-sidebar/facebook-sidebar.component';
import { FacebookAddPostComponent } from './facebook-add-post/facebook-add-post.component';
import { FacebookUserListComponent } from './facebook-user-list/facebook-user-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUserComponent } from './add-user/add-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { StoriesComponent } from './stories/stories.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    FacebookDashboardComponent,
    FacebookHomeComponent,
    FacebookSidebarComponent,
    FacebookAddPostComponent,
    FacebookUserListComponent,
    AddUserComponent,
    UserProfileComponent,
    StoriesComponent,
    TimelineComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    FacebookRoutingModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class FacebookModule { }
