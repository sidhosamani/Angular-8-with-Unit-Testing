import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../constants/user.contant';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  title: string;
  userlist: Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.title = "User list";
    this.userlist = new Array<User>();
    this.getUserList();
  }

  public getUserList() {
    this.userService.getUser().subscribe(
      users => {
        this.userlist = users;
      },
      error => {
        this.userlist = new Array<User>();
      }
    );
  }

}
