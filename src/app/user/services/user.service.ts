import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private SERVER_URL = 'http://localhost:3000/';
  private USERS_URL = 'users/';
  private ROLES_URL = 'roles/';
  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.SERVER_URL + this.USERS_URL);
  }
  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(this.SERVER_URL + this.USERS_URL + id);
  }
  createUser(item: User): Observable<User> {
    return this.httpClient.post<User>(this.SERVER_URL + this.USERS_URL, item);
  }
  updateUser(item: User): Observable<User> {
    return this.httpClient.patch<User>(this.SERVER_URL + this.USERS_URL + item.id, item);
  }
  deleteUser(id: string): Observable<User> {
    return this.httpClient.delete<User>(this.SERVER_URL + this.USERS_URL + id);
  }
  getRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(this.SERVER_URL + this.USERS_URL);
  }
  addUserToRole(userId: string, roleId: string) {
    let usersInRole: string[] = [];
    let updatedRole: Role;
    return this.getRoleById(roleId).subscribe((role: Role) => {
      usersInRole = role.userIds;
      usersInRole.push(userId);
      updatedRole = {
        id: role.id,
        name: role.name,
        isActive: role.isActive,
        dateCreated: role.dateCreated,
        dateModified: new Date(Date.now()),
        userIds: usersInRole
      }
      this.updateRole(role).subscribe(res => console.log(res));
    });
  }
  getRoleById(roleId: string): Observable<Role> {
    return this.httpClient.get<Role>(this.SERVER_URL + this.ROLES_URL + roleId);
  }
  updateRole(role: Role): Observable<Role> {
    return this.httpClient.patch<Role>(this.SERVER_URL + this.ROLES_URL + role.id, role);
  }
}
