import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userApi: UserService) { 
    this.getUserList();
  }

  ngOnInit() {
  }

  getUserList(){
    this.userApi.getList();
  }

}
