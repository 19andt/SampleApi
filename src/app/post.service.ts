import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  apiRoot: string = 'https://jsonplaceholder.typicode.com/posts';
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

  getPostDetail(postId: number){
    let promise = new Promise((response, reject) => {
      let apiDetail = `${this.apiRoot}?id=${postId}`
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
