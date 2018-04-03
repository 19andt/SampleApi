import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any;
  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postApi: PostService,
    private userApi: UserService,
    private commentApi: CommentService
  ) {
    this.activatedRoute.paramMap
      .subscribe(params => {
        if (params.get('id') !== null) {
          this.getPostDetail(+params.get('id'));
        }
      });
  }

  ngOnInit() {
  }

  getPostDetail(id: number) {
    this.postApi.getPostDetail(id).then(
      _ => {
        this.post = this.postApi.results[0];
        this.getUserDetail();
        this.getComments();
      }
    );
  }

  getComments(){
    this.commentApi.getCommentPost(+this.post.id).then(
      _ => {
        this.post.comments = this.commentApi.results;
      }
    );
  }

  getUserDetail(){
    this.userApi.getDetail(+this.post.userId).then(
      _ => {
        this.post.user = this.userApi.results[0];
      }
    );
  }

}
