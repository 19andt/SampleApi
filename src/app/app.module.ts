import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { CommentService } from './comment.service';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService,
    PostService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
