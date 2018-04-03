import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { CommentService } from './comment.service';

const appRoutes: Routes = [
  {
    path: 'user',
    component: UserListComponent
  },
  {
    path: 'user/:id',
    component: UserDetailComponent
  },
  {
    path: 'post',
    component: PostListComponent
  },
  {
    path: 'post/:id',
    component: PostDetailComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    ),
    FormsModule
  ],
  providers: [
    UserService,
    PostService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
