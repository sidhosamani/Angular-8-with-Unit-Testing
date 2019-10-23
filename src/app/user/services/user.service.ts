import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { User } from "../constants/user.contant";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public userlist: Array<User> = [
    {email: 'email1@gmail.com', firstname: 'username1', lastname: 'ln'},
    {email: 'email2@gmail.com', firstname: 'username2', lastname: 'ln'},
    {email: 'email3@gmail.com', firstname: 'username3', lastname: 'ln'},
    {email: 'email4@gmail.com', firstname: 'username4', lastname: 'ln'},
    {email: 'email5@gmail.com', firstname: 'username5', lastname: 'ln'}
  ];
  public subjectUserlist: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>(this.userlist);

  constructor() {

  }

  public addUser(user: User) {
    this.userlist.push(user);
    this.subjectUserlist.next(this.userlist);
  }

  public getUser(): Observable<Array<User>> {
    return this.subjectUserlist.asObservable();
  }
}
