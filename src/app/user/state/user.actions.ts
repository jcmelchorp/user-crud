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
  ACTIVATE_USER_FAIL = '[User] Activate User Fail',
  /* role action types */
  LOAD_ADMINS = '[Role] Load Admins',
  LOAD_ADMINS_SUCCESS = '[Role] Load Admins Success',
  LOAD_ADMINS_FAIL = '[Role] Load Admins Fail',
  LOAD_TEACHERS = '[Role] Load Teachers',
  LOAD_TEACHERS_SUCCESS = '[Role] Load Teachers Success',
  LOAD_TEACHERS_FAIL = '[Role] Load Teachers Fail',
  LOAD_STUDENTS = '[Role] Load Students',
  LOAD_STUDENTS_SUCCESS = '[Role] Load Students Success',
  LOAD_STUDENTS_FAIL = '[Role] Load Students Fail',
  LOAD_PARENTS = '[Role] Load Parents',
  LOAD_PARENTS_SUCCESS = '[Role] Load Parents Success',
  LOAD_PARENTS_FAIL = '[Role] Load Parents Fail',
  ADD_USER_ADMIN = '[Role] Add User Admin',
  ADD_USER_ADMIN_SUCCESS = '[Role] Add User Admin Success',
  ADD_USER_ADMIN_FAIL = '[Role] Add User Admin Fail',
  ADD_USER_TEACHER = '[Role] Add User Teacher',
  ADD_USER_TEACHER_SUCCESS = '[Role] Add User Teacher Success',
  ADD_USER_TEACHER_FAIL = '[Role] Add User Teacher Fail',
  ADD_USER_STUDENT = '[Role] Add User Student',
  ADD_USER_STUDENT_SUCCESS = '[Role] Add User Student Success',
  ADD_USER_STUDENT_FAIL = '[Role] Add User Student Fail',
  ADD_USER_PARENT = '[Role] Add User Parent',
  ADD_USER_PARENT_SUCCESS = '[Role] Add User Parent Success',
  ADD_USER_PARENT_FAIL = '[Role] Add User Parent Fail',
  REMOVE_USER_ADMIN = '[Role] Remove User Admin',
  REMOVE_USER_ADMIN_SUCCESS = '[Role] Remove User Admin Success',
  REMOVE_USER_ADMIN_FAIL = '[Role] Remove User Admin Fail',
  REMOVE_USER_TEACHER = '[Role] Remove User Teacher',
  REMOVE_USER_TEACHER_SUCCESS = '[Role] Remove User Teacher Success',
  REMOVE_USER_TEACHER_FAIL = '[Role] Remove User Teacher Fail',
  REMOVE_USER_STUDENT = '[Role] Remove User Student',
  REMOVE_USER_STUDENT_SUCCESS = '[Role] Remove User Student Success',
  REMOVE_USER_STUDENT_FAIL = '[Role] Remove User Student Fail',
  REMOVE_USER_PARENT = '[Role] Remove User Parent',
  REMOVE_USER_PARENT_SUCCESS = '[Role] Remove User Parent Success',
  REMOVE_USER_PARENT_FAIL = '[Role] Remove User Parent Fail'
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
/* Load Admins */
export class LoadAdminUsers implements Action {
  readonly type = UserActionTypes.LOAD_ADMINS;
}
export class LoadAdminUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_ADMINS_SUCCESS;
  constructor(public payload: string[]) { }
}
export class LoadAdminUsersFail implements Action {
  readonly type = UserActionTypes.LOAD_ADMINS_FAIL;
  constructor(public payload: string) { }
}
/* Load Teachers */
export class LoadTeacherUsers implements Action {
  readonly type = UserActionTypes.LOAD_TEACHERS;
}
export class LoadTeacherUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_TEACHERS_SUCCESS;
  constructor(public payload: string[]) { }
}
export class LoadTeacherUsersFail implements Action {
  readonly type = UserActionTypes.LOAD_TEACHERS_FAIL;
  constructor(public payload: string) { }
}
/* Load Students */
export class LoadStudentUsers implements Action {
  readonly type = UserActionTypes.LOAD_STUDENTS;
}
export class LoadStudentUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_STUDENTS_SUCCESS;
  constructor(public payload: string[]) { }
}
export class LoadStudentUsersFail implements Action {
  readonly type = UserActionTypes.LOAD_STUDENTS_FAIL;
  constructor(public payload: string) { }
}
/* Load Parents */
export class LoadParentUsers implements Action {
  readonly type = UserActionTypes.LOAD_PARENTS;
}
export class LoadParentUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_PARENTS_SUCCESS;
  constructor(public payload: string[]) { }
}
export class LoadParentUsersFail implements Action {
  readonly type = UserActionTypes.LOAD_PARENTS_FAIL;
  constructor(public payload: string) { }
}
/* Add User to Admins */
export class AddUserAdmin implements Action {
  readonly type = UserActionTypes.ADD_USER_ADMIN;
  constructor(public payload: string) { }
}
export class AddUserAdminSuccess implements Action {
  readonly type = UserActionTypes.ADD_USER_ADMIN_SUCCESS;
  constructor(public payload: string) { }
}
export class AddUserAdminFail implements Action {
  readonly type = UserActionTypes.ADD_USER_ADMIN_FAIL;
  constructor(public payload: string) { }
}
/* Add User to Teachers */
export class AddUserTeacher implements Action {
  readonly type = UserActionTypes.ADD_USER_TEACHER;
  constructor(public payload: string) { }
}
export class AddUserTeacherSuccess implements Action {
  readonly type = UserActionTypes.ADD_USER_TEACHER_SUCCESS;
  constructor(public payload: string) { }
}
export class AddUserTeacherFail implements Action {
  readonly type = UserActionTypes.ADD_USER_TEACHER_FAIL;
  constructor(public payload: string) { }
}
/* Add User to Students */
export class AddUserStudent implements Action {
  readonly type = UserActionTypes.ADD_USER_STUDENT;
  constructor(public payload: string) { }
}
export class AddUserStudentSuccess implements Action {
  readonly type = UserActionTypes.ADD_USER_STUDENT_SUCCESS;
  constructor(public payload: string) { }
}
export class AddUserStudentFail implements Action {
  readonly type = UserActionTypes.ADD_USER_STUDENT_FAIL;
  constructor(public payload: string) { }
}
/* Add User to Parents */
export class AddUserParent implements Action {
  readonly type = UserActionTypes.ADD_USER_PARENT;
  constructor(public payload: string) { }
}
export class AddUserParentSuccess implements Action {
  readonly type = UserActionTypes.ADD_USER_PARENT_SUCCESS;
  constructor(public payload: string) { }
}
export class AddUserParentFail implements Action {
  readonly type = UserActionTypes.ADD_USER_PARENT_FAIL;
  constructor(public payload: string) { }
}
/* Add User to Admins */
export class RemoveUserAdmin implements Action {
  readonly type = UserActionTypes.REMOVE_USER_ADMIN;
}
export class RemoveUserAdminSuccess implements Action {
  readonly type = UserActionTypes.REMOVE_USER_ADMIN_SUCCESS;
  constructor(public payload: string) { }
}
export class RemoveUserAdminFail implements Action {
  readonly type = UserActionTypes.REMOVE_USER_ADMIN_FAIL;
  constructor(public payload: string) { }
}
/* Add User to Teachers */
export class RemoveUserTeacher implements Action {
  readonly type = UserActionTypes.REMOVE_USER_TEACHER;
}
export class RemoveUserTeacherSuccess implements Action {
  readonly type = UserActionTypes.REMOVE_USER_TEACHER_SUCCESS;
  constructor(public payload: string) { }
}
export class RemoveUserTeacherFail implements Action {
  readonly type = UserActionTypes.REMOVE_USER_TEACHER_FAIL;
  constructor(public payload: string) { }
}
/* Add User to Students */
export class RemoveUserStudent implements Action {
  readonly type = UserActionTypes.REMOVE_USER_STUDENT;
}
export class RemoveUserStudentSuccess implements Action {
  readonly type = UserActionTypes.REMOVE_USER_STUDENT_SUCCESS;
  constructor(public payload: string) { }
}
export class RemoveUserStudentFail implements Action {
  readonly type = UserActionTypes.REMOVE_USER_STUDENT_FAIL;
  constructor(public payload: string) { }
}
/* Add User to Parents */
export class RemoveUserParent implements Action {
  readonly type = UserActionTypes.REMOVE_USER_PARENT;
}
export class RemoveUserParentSuccess implements Action {
  readonly type = UserActionTypes.REMOVE_USER_PARENT_SUCCESS;
  constructor(public payload: string) { }
}
export class RemoveUserParentFail implements Action {
  readonly type = UserActionTypes.REMOVE_USER_PARENT_FAIL;
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
  | ActivateUserFail
  | LoadAdminUsers
  | LoadAdminUsersSuccess
  | LoadAdminUsersFail
  | LoadTeacherUsers
  | LoadTeacherUsersSuccess
  | LoadTeacherUsersFail
  | LoadStudentUsers
  | LoadStudentUsersSuccess
  | LoadStudentUsersFail
  | LoadParentUsers
  | LoadParentUsersSuccess
  | LoadParentUsersFail;
