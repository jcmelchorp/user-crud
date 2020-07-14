import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './containers/user/user.component';
import { RolesComponent } from './containers/roles/roles.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'roles', component: RolesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
