import { UserDetailsComponent } from './../user-details/user-details.component';
import { NotificationService } from './../../services/notification.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UsersListDataSource } from './users-list-datasource';
import { User } from '../../models/user.model';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../../state/user.reducer';
import * as userActions from '../../state/user.actions';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmUserComponent } from '../confirm-user/confirm-user.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;
  //@ViewChild(MatTable) table: MatTable<User>;
  //dataSource: UsersListDataSource;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName', 'dateCreated', 'dateModified', 'isActive', 'actions'];

  users$: Observable<User[]>;
  error$: Observable<string>;
  constructor(
    private store: Store<fromUser.AppState>,
    public dialog: MatDialog,
    public notification: NotificationService,
  ) { }

  ngOnInit() {
    //this.dataSource = new UsersListDataSource(this.store);
    this.store.dispatch(new userActions.LoadUsers());
    this.users$ = this.store.pipe(select(fromUser.getUsers));
    this.error$ = this.store.pipe(select(fromUser.getError));
  }
  /* ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  } */
  deleteUser(user: User): void {
    const dialogRef = this.dialog.open(ConfirmUserComponent, {
      width: '300px',
      data: user
    });
    dialogRef.componentInstance.confirmation.subscribe((confirmation: boolean) => {
      if (confirmation) {
        this.store.dispatch(new userActions.DeleteUser(user.id));
        this.notification.showNotification('User: "' + user.firstName + ' ' + user.lastName + '" was deleted', 'success', 5000);
      }
    });
  }

  editUser(userId: string): void {
    this.store.dispatch(new userActions.LoadUser(userId));
  }

  toggleIsActive(user: User) {
    console.log(user);
    const newUser = user;
    /*     const newUser = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          passwordHash: user.passwordHash,
          email: user.email,
          //rolesIds?: string[];
          //coursesIds?: string[];
          //photoUrl?: string;
          dateOfBirth: user.dateOfBirth,
          gender: user.gender,
          isOnline: user.isOnline,
          isParent: user.isParent,
          isTeacher: user.isTeacher,
          isStudent: user.isStudent,
          isAdmin: user.isAdmin,
          isActive: !user.isActive,
          dateCreated: user.dateCreated,
          dateModified: new Date(Date.now())
        }; */
    this.store.dispatch(new userActions.UpdateUser(newUser));
    this.notification.showNotification(
      'User: "' +
      newUser.firstName + ' ' +
      newUser.lastName + '" was ' +
      [(newUser.isActive) ? 'Activated' : 'Deactivated'],
      'success', 5);
  }
  userDetailsDialog(user: User) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = user;
    dialogConfig.width = '350px';
    const dialogRef = this.dialog.open(UserDetailsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log('Dialog output:', data)
    );
  }
}
