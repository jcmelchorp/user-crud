import { mergeMap, map } from 'rxjs/operators';
import { UsersInRole } from './../../models/users-in-role.viewmodel';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Role } from '../../models/role.model';
import { User } from '../../models/user.model';
import { from, pipe } from 'rxjs';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  panelOpenState = false;
  roles: Role[];
  users: User[];
  values$: any;
  usersInRoles: UsersInRole[];
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    //const roles$ = this.userService.getRoles();
    //const users$ = this.userService.getUsers();
  }

}
