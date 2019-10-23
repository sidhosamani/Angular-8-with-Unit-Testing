import { async, ComponentFixture, TestBed, tick, fakeAsync } from "@angular/core/testing";

import { CreateUserComponent } from "./create-user.component";
import { RouterTestingModule } from "@angular/router/testing";
import { UserService } from "../../services/user.service";
import { User } from "../../constants/user.contant";
import { of, Observable } from "rxjs";
import { ReactiveFormsModule } from "@angular/forms";

describe("CreateUserComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [CreateUserComponent],
      providers: [UserService]
    }).compileComponents();
  }));

  it("should create", () => {
    const fixture = TestBed.createComponent(CreateUserComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("title shold be 'Create User'", () => {
    const fixture = TestBed.createComponent(CreateUserComponent);
    const app = fixture.debugElement.componentInstance;

    // detectChanges() will call the ngOnint()
    fixture.detectChanges();
    expect(app.title).toEqual("Create User");
  });

  it("email should be valid", () => {
    const fixture = TestBed.createComponent(CreateUserComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    let email = app.userform.controls.email;
    //Valid email
    email.setValue("sid@gmail.com");

    //Invalid Email
    // email.setValue("email1gmail.com");
    expect(email.valid).toBeTruthy();
  });

  it("form should be valid", async(() => {
    let fixture = TestBed.createComponent(CreateUserComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    let email = app.userform.controls.email;
    let firstname = app.userform.controls.firstname;
    let lastname = app.userform.controls.lastname;

    //Valid email
    email.setValue("sid@gmail.com");

    //Invalid Email
    // email.setValue("email1gmail.com");

    firstname.setValue("Sid");
    lastname.setValue("H");

    expect(app.userform.valid).toBeTruthy();
  }));

  it("should add user to service", () => {
    let fixture = TestBed.createComponent(CreateUserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = TestBed.get(UserService);
    fixture.detectChanges();

    let user: User = new User();
    user.email = "sid@gmail.com";
    user.firstname = "Sid";
    user.lastname = "H";

    userService.addUser(user);
    fixture.detectChanges();
    expect(userService.userlist.length).toBeGreaterThan(0);
  });

  it("should get user from service", fakeAsync(() => {
    let fixture = TestBed.createComponent(CreateUserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = TestBed.get(UserService);

    let user: User = new User();
    user.email = "sid@gmail.com";
    user.firstname = "Sid";
    user.lastname = "H";
    let userlist: Array<User> = new Array<User>();
    userlist.push(user);

    let spy = spyOn(userService, "getUser").and.returnValue(of(userlist));
    fixture.detectChanges();
    tick();
    expect(app.userList.length).toBeGreaterThan(0);
  }));

});


