import {
  async,
  ComponentFixture,
  TestBed,
} from "@angular/core/testing";

import { ListUserComponent } from "./list-user.component";
import { CreateUserComponent } from "../create-user/create-user.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UserService } from "../../services/user.service";

describe("ListUserComponent", () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ListUserComponent, CreateUserComponent],
      providers: [UserService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("title shold be 'User list'", () => {
    // detectChanges() will call the ngOnint()
    fixture.detectChanges();
    expect(component.title).toEqual("User list");
  });

  it("should get user from service", () => {
    fixture.detectChanges();
    expect(component.userlist.length).toBeGreaterThan(0);
  });
});
