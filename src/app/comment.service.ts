import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CommentService {
  apiRoot: string = 'https://jsonplaceholder.typicode.com/comments';
  results: Object[];

  constructor(private http: Http) { }

  getList(){
    let promise = new Promise((response, reject) => {
      this.http.get(this.apiRoot)
        .toPromise()
        .then(
          res => {
            this.results = res.json();
            response();
          },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;
  }

  getCommentDetail(commentId: number){
    let promise = new Promise((response, reject) => {
      let apiDetail = `${this.apiRoot}?id=${commentId}`
      this.http.get(apiDetail)
        .toPromise()
        .then(
          res => {
            this.results = res.json();
            response();
          },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;
  }

  getCommentPost(postId: number){
    let promise = new Promise((response, reject) => {
      let apiDetail = `${this.apiRoot}?postId=${postId}`
      this.http.get(apiDetail)
        .toPromise()
        .then(
          res => {
            this.results = res.json();
            response();
          },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;
  }

}
