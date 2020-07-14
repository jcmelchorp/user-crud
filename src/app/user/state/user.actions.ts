import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
import { Update } from '@ngrx/entity';

export enum UserActionTypes {
  LOAD_USERS = '[User] Load Users',
  LOAD_USERS_SUCCESS = '[User] Load Users Success',
  LOAD_USERS_FAIL = '[User] Load Users Fail',
  LOAD_USER = '[User] Load User',
  LOAD_USER_SUCCESS = '[User] Load User Success',
  LOAD_USER_FAIL = '[User] Load User Fail',
  CREATE_USER = '[User] Create User',
  CREATE_USER_SUCCESS = '[User] Create User Success',
  CREATE_USER_FAIL = '[User] Create User Fail',
  UPDATE_USER = '[User] Update User',
  UPDATE_USER_SUCCESS = '[User] Update User Success',
  UPDATE_USER_FAIL = '[User] Update User Fail',
  DELETE_USER = '[User] Delete User',
  DELETE_USER_SUCCESS = '[User] Delete User Success',
  DELETE_USER_FAIL = '[User] Delete User Fail',
  ACTIVATE_USER = '[User] Activate User',
  ACTIVATE_USER_SUCCESS = '[User] Activate User Success',
  ACTIVATE_USER_FAIL = '[User] Activate User Fail'
}
/* Create Users */
export class LoadUsers implements Action {
  readonly type = UserActionTypes.LOAD_USERS;
}
export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS;
  constructor(public payload: User[]) { }
}
export class LoadUsersFail implements Action {
  readonly type = UserActionTypes.LOAD_USERS_FAIL;
  constructor(public payload: string) { }
}
/* Load User */
export class LoadUser implements Action {
  readonly type = UserActionTypes.LOAD_USER;
  constructor(public payload: string) { }
}
export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USER_SUCCESS;
  constructor(public payload: User) { }
}
export class LoadUserFail implements Action {
  readonly type = UserActionTypes.LOAD_USER_FAIL;
  constructor(public payload: string) { }
}
/* Create User */
export class CreateUser implements Action {
  readonly type = UserActionTypes.CREATE_USER;
  constructor(public payload: User) { }
}
export class CreateUserSuccess implements Action {
  readonly type = UserActionTypes.CREATE_USER_SUCCESS;
  constructor(public payload: User) { }
}
export class CreateUserFail implements Action {
  readonly type = UserActionTypes.CREATE_USER_FAIL;
  constructor(public payload: string) { }
}
/* Update User */
export class UpdateUser implements Action {
  readonly type = UserActionTypes.UPDATE_USER;
  constructor(public payload: User) { }
}
export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UPDATE_USER_SUCCESS;
  constructor(public payload: Update<User>) { }
}
export class UpdateUserFail implements Action {
  readonly type = UserActionTypes.UPDATE_USER_FAIL;
  constructor(public payload: string) { }
}
/* Delete User */
export class DeleteUser implements Action {
  readonly type = UserActionTypes.DELETE_USER;
  constructor(public payload: string) { }
}
export class DeleteUserSuccess implements Action {
  readonly type = UserActionTypes.DELETE_USER_SUCCESS;
  constructor(public payload: string) { }
}
export class DeleteUserFail implements Action {
  readonly type = UserActionTypes.DELETE_USER_FAIL;
  constructor(public payload: string) { }
}
/* Toggle isActive User */
export class ActivateUser implements Action {
  readonly type = UserActionTypes.ACTIVATE_USER;
  constructor(public payload: User) { }
}
export class ActivateUserSuccess implements Action {
  readonly type = UserActionTypes.ACTIVATE_USER_SUCCESS;
  constructor(public payload: Update<User>) { }
}
export class ActivateUserFail implements Action {
  readonly type = UserActionTypes.ACTIVATE_USER_FAIL;
  constructor(public payload: string) { }
}

export type Actions =
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail
  | LoadUser
  | LoadUserSuccess
  | LoadUserFail
  | CreateUser
  | CreateUserSuccess
  | CreateUserFail
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFail
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserFail
  | ActivateUser
  | ActivateUserSuccess
  | ActivateUserFail;
