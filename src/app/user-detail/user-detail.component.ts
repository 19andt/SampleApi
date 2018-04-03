import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private userApi: UserService) {
    this.activatedRoute.paramMap
      .subscribe(params => {
        if(params.get('id') !== null) {
          this.getUserDetail(+params.get('id'));
        }
      });
  }

  ngOnInit() {
  }

  getUserDetail(id: number){
    this.userApi.getDetail(id);
    this.user = this.userApi.results[0];
  }

}
