import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "../../constants/user.contant";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"]
})
export class CreateUserComponent implements OnInit {
  public title: string;
  public userform: FormGroup;
  public userList: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.title = "Create User";
    this.userform = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      firstname: new FormControl(""),
      lastname: new FormControl("")
    });

    this.userService.getUser().subscribe(
      val => {
        this.userList = val;
      }
    );
  }

  get f() {
    return this.userform.controls;
  }

  public onFormSubmit() {
    const user: User = this.userform.value;
    this.userService.addUser(user);
  }
}
