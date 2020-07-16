import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, pipe } from 'rxjs';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';
import { concatMap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private SERVER_URL = 'http://localhost:3000/';
  private USERS_URL = 'users/';

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
  getUsersInRole(roleName): Observable<string[]> {
    return this.httpClient.get<string[]>(this.SERVER_URL + roleName + '/');
  }
  addUserToRole(userId: string, roleName: string) {
    return this.httpClient.post<string>(this.SERVER_URL + roleName + '/', userId);
  }
  removeUserFromRole(userId: string, roleName: string) {
    return this.httpClient.delete<string>(this.SERVER_URL + roleName + '/' + userId);
  }
  /* doesUsernameExist(username:string): Observable<boolean>{

  } */
}
