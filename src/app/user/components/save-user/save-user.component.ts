import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { v4 as uuid } from 'uuid';
import { NotificationService } from '../../services/notification.service';
import { Store } from '@ngrx/store';
import * as userActions from '../../state/user.actions';
import * as fromUser from '../../state/user.reducer';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.scss']
})
export class SaveUserComponent implements OnInit {
  userForm: FormGroup;
  unamePattern = '[a-zA-Z0-9]*';
  constructor(
    private fb: FormBuilder,
    private store: Store<fromUser.AppState>,
    private notification: NotificationService
  ) { }


  ngOnInit() {
    this.initializeForm();
    this.selectCurrentUser();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      id: new FormControl(''),
      firstName: new FormControl('', [
        Validators.required,
        //Validators.pattern('[a-zA-Z ]*')
      ]),
      lastName: new FormControl('', [
        Validators.required,
        //Validators.pattern('[a-zA-Z ]*')
      ]),
      username: new FormControl('', [
        Validators.pattern(this.unamePattern),
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
      email: new FormControl('', Validators.email),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      isTeacher: new FormControl(false),
      isStudent: new FormControl(false),
      isAdmin: new FormControl(false),
      isActive: new FormControl(true),
      dateCreated: new FormControl(''),
      dateModified: new FormControl(''),
    });
  }

  selectCurrentUser(): void {
    const item$: Observable<User> = this.store.select(fromUser.getCurrentUser);
    item$.subscribe(currentUser => {
      if (currentUser) {
        this.userForm.patchValue(currentUser);
        /* this.userForm.patchValue({
          id: currentUser.id,
          firstName: currentUser.firstName,
          lastName: currentUser.lastName,
          username: currentUser.username,
          email: currentUser.email,
          dateOfBirt: currentUser.dateOfBirth,
          gender: currentUser.gender,
          isOnline: currentUser.isOnline,
          isParent: currentUser.isParent,
          isTeacher: currentUser.isTeacher,
          isStudent: currentUser.isStudent,
          isAdmin: currentUser.isAdmin,
          isActive: currentUser.isActive,
          dateCreated: currentUser.dateCreated,
        }); */
      }
    });
  }

  onSave(): void {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;
      /* const newUser: User = {
        id: this.userForm.get('id').value,
        firstName: this.userForm.get('firstName').value,
        lastName: this.userForm.get('lastName').value,
        username: this.userForm.get('username').value,
        email: this.userForm.get('email').value,
        dateOfBirth: this.userForm.get('dateOfBirth').value,
        gender: this.userForm.get('gender').value,
        isOnline: this.userForm.get('isOnline').value,
        isParent: this.userForm.get('isParent').value,
        isTeacher: this.userForm.get('isTeacher').value,
        isStudent: this.userForm.get('isStudent').value,
        isAdmin: this.userForm.get('isAdmin').value,
        isActive: this.userForm.get('isActive').value,
        dateCreated: this.userForm.get('dateCreated').value
      }; */
      if (newUser.id === '') {
        newUser.id = uuid();
        newUser.dateCreated = new Date(Date.now());
        this.store.dispatch(new userActions.CreateUser(newUser));
        this.notification.showNotification(
          'User: "' + newUser.username + '" was created', 'success', 5);
        if (newUser.isTeacher) {
          this.store.dispatch(new userActions.AddUserTeacher(newUser.id));
          this.notification.showNotification(
            'User: "' + newUser.username + '" was added to teacher\'s list', 'success', 5);
        }
        if (newUser.isStudent) {
          this.store.dispatch(new userActions.AddUserStudent(newUser.id));
          this.notification.showNotification(
            'User: "' + newUser.username + '" was added to student\'s list', 'success', 5);
        }
        if (newUser.isParent) {
          this.store.dispatch(new userActions.AddUserParent(newUser.id));
          this.notification.showNotification(
            'User: "' + newUser.username + '" was added to parent\'s list', 'success', 5);
        }
        if (newUser.isAdmin) {
          this.store.dispatch(new userActions.AddUserAdmin(newUser.id));
          this.notification.showNotification(
            'User: "' + newUser.username + '" was added to admin\'s list', 'success', 5);
        }
      } else {
        newUser.dateModified = new Date(Date.now());
        this.store.dispatch(new userActions.UpdateUser(newUser));
        this.notification.showNotification(
          'User: "' + newUser.username + '" was updated', 'success', 5);
      }
      this.onReset();
    } else {
      return;
    }
  }
  onReset(): void {
    this.userForm.reset();
    this.initializeForm();
  }
}
