import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Role } from '../../models/role.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  panelOpenState = false;
  roles: Role[];
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getRoles().subscribe(r => {
      this.roles = r;
    });
    /*  this.userService.getUsers().subscribe(users => {
       this.users = users;
     }); */
  }

}
