import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ListUserComponent } from './pages/list-user/list-user.component';

const routes: Routes = [
  { path: "create-user", component: CreateUserComponent },
  { path: "list-user", component: ListUserComponent },
  { path: "", redirectTo: "create-user", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
