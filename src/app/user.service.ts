import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  apiRoot: string = 'https://jsonplaceholder.typicode.com/users';
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

  getDetail(userId: number){
    let promise = new Promise((response, reject) => {
      let apiDetail = `${this.apiRoot}?id=${userId}`
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
