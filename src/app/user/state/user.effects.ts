import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import * as userActions from '../state/user.actions';

@Injectable()
export class UserEffect {

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) { }

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadUsers>(userActions.UserActionTypes.LOAD_USERS),
    mergeMap((action: userActions.LoadUsers) =>
      this.userService.getUsers().pipe(
        map(
          (users: User[]) =>
            new userActions.LoadUsersSuccess(users)
        ),
        catchError(
          err =>
            of(new userActions.LoadUsersFail(err))
        )
      )
    )
  );

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadUser>(userActions.UserActionTypes.LOAD_USER),
    mergeMap((action: userActions.LoadUser) =>
      this.userService.getUserById(action.payload).pipe(
        map(
          (user: User) =>
            new userActions.LoadUserSuccess(user)
        ),
        catchError(
          err =>
            of(new userActions.LoadUserFail(err))
        )
      )
    )
  );


  @Effect()
  createUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.CreateUser>(userActions.UserActionTypes.CREATE_USER),
    map((action: userActions.CreateUser) => action.payload),
    mergeMap((user: User) =>
      this.userService.createUser(user).pipe(
        map(
          (newUser: User) =>
            new userActions.CreateUserSuccess(newUser)
        ),
        catchError(
          err =>
            of(new userActions.CreateUserFail(err))
        )
      )
    )
  );

  @Effect()
  updateUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.UpdateUser>(userActions.UserActionTypes.UPDATE_USER),
    map((action: userActions.UpdateUser) => action.payload),
    mergeMap((user: User) =>
      this.userService.updateUser(user).pipe(
        map(
          (updatedUser: User) =>
            new userActions.UpdateUserSuccess({
              id: updatedUser.id,
              changes: updatedUser
            })
        ),
        catchError(
          err =>
            of(new userActions.UpdateUserFail(err))
        )
      )
    )
  );

  @Effect()
  deleteUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.DeleteUser>(userActions.UserActionTypes.DELETE_USER),
    map((action: userActions.DeleteUser) => action.payload),
    mergeMap((id: string) =>
      this.userService.deleteUser(id).pipe(
        map(
          () =>
            new userActions.DeleteUserSuccess(id)
        ),
        catchError(
          err =>
            of(new userActions.DeleteUserFail(err))
        )
      )
    )
  );
  @Effect()
  activateUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.ActivateUser>(userActions.UserActionTypes.ACTIVATE_USER),
    map((action: userActions.ActivateUser) => action.payload),
    mergeMap((user: User) =>
      this.userService.updateUser(user).pipe(
        map(
          (updatedUser: User) =>
            new userActions.UpdateUserSuccess({
              id: updatedUser.id,
              changes: updatedUser
            })
        ),
        catchError(
          err =>
            of(new userActions.UpdateUserFail(err))
        )
      )
    )
  );
  @Effect()
  loadAdmins$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadAdminUsers>(userActions.UserActionTypes.LOAD_ADMINS),
    mergeMap((action: userActions.LoadAdminUsers) =>
      this.userService.getUsersInRole('admin').pipe(
        map(
          (userIds: string[]) =>
            new userActions.LoadAdminUsersSuccess(userIds)
        ),
        catchError(
          err =>
            of(new userActions.LoadAdminUsersFail(err))
        )
      )
    )
  );
  @Effect()
  loadTeachers$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadTeacherUsers>(userActions.UserActionTypes.LOAD_TEACHERS),
    mergeMap((action: userActions.LoadTeacherUsers) =>
      this.userService.getUsersInRole('teachers').pipe(
        map(
          (userIds: string[]) =>
            new userActions.LoadTeacherUsersSuccess(userIds)
        ),
        catchError(
          err =>
            of(new userActions.LoadTeacherUsersFail(err))
        )
      )
    )
  );
  @Effect()
  loadStudents$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadStudentUsers>(userActions.UserActionTypes.LOAD_STUDENTS),
    mergeMap((action: userActions.LoadStudentUsers) =>
      this.userService.getUsersInRole('students').pipe(
        map(
          (userIds: string[]) =>
            new userActions.LoadStudentUsersSuccess(userIds)
        ),
        catchError(
          err =>
            of(new userActions.LoadStudentUsersFail(err))
        )
      )
    )
  );
  @Effect()
  loadParents$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadParentUsers>(userActions.UserActionTypes.LOAD_PARENTS),
    mergeMap((action: userActions.LoadParentUsers) =>
      this.userService.getUsersInRole('parents').pipe(
        map(
          (userIds: string[]) =>
            new userActions.LoadParentUsersSuccess(userIds)
        ),
        catchError(
          err =>
            of(new userActions.LoadParentUsersFail(err))
        )
      )
    )
  );
  // TODO: Add User to Role & Remove User to Role
}
