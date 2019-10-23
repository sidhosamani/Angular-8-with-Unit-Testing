import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ListUserComponent } from './pages/list-user/list-user.component';



@NgModule({
  declarations: [CreateUserComponent, ListUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
