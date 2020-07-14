import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { v4 as uuid } from 'uuid';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.scss']
})
export class SaveUserComponent implements OnInit {
  userForm: FormGroup;
  unamePattern = '[a-zA-Z0-9]*';
  pwdPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$';
  mobnumPattern = '^((\\+52-?)|0)?[0-9]{10}$';
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private notificationService: NotificationService
  ) { }


  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      id: new FormControl(''),
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.pattern(this.unamePattern),
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
      /*passwordHash: new FormControl('',[
        Validators.required,
        Validators.pattern(this.pwdPattern)
      ]),*/
      email: new FormControl('', [Validators.required, Validators.email]),
      //coursesIds: new FormControl(''),
      //photoUrl: new FormControl('',Validators.),
      dateOfBirth: new FormControl(''),
      gender: new FormControl('', Validators.required),
      isTeacher: new FormControl(false),
      isStudent: new FormControl(true),
      isAdmin: new FormControl(false),
      isActive: new FormControl(true, Validators.required),
      dateCreated: new FormControl(''),
      dateModified: new FormControl(''),
    });
  }

  /* selectCurrentItem(): void {
    const item$: Observable<User> = this.store.select(fromUser.getCurrentUser);
    item$.subscribe(currentItem => {
      if (currentItem) {
        this.userForm.patchValue({



        });
      }
    });
  } */

  onSave(): void {
    if (this.userForm.valid) {
      const newUser: User = {
        id: this.userForm.get('id').value,
        firstName: this.userForm.get('firstName').value,
        lastName: this.userForm.get('lastName').value,
        username: this.userForm.get('username').value,
        //passwordHash: this.userForm.get('passwordHash').value,
        email: this.userForm.get('email').value,
        //rolesIds: this.userForm.get('rolesId').value,
        //coursesIds: this.userForm.get('username').value,
        //photoUrl: this.userForm.get('photoUrl').value,
        dateOfBirth: this.userForm.get('dateOfBirth').value,
        gender: this.userForm.get('gender').value,
        //isOnline: this.userForm.get('username').value,
        isTeacher: this.userForm.get('isTeacher').value,
        isStudent: this.userForm.get('isStudent').value,
        isAdmin: this.userForm.get('isAdmin').value,
        isActive: this.userForm.get('isActive').value,
        dateCreated: this.userForm.get('dateCreated').value
      };
      if (newUser.id === '') {
        newUser.id = uuid();
        newUser.dateCreated = new Date(Date.now());
        this.userService.createUser(newUser).subscribe(data => console.log(data));
        this.notificationService.showNotification(
          'User: "' + newUser.username + '" was created', null, 5, 'Success');
        if (newUser.isTeacher) {
          this.userService.addUserToRole(newUser.id, '3a63e730-c4b2-11ea-afee-f9ea7843cca7');
          this.notificationService.showNotification(
            'User: "' + newUser.username + '" was added to teacher\'s list', null, 5, 'Success');
        }

        if (newUser.isStudent) {
          this.userService.addUserToRole(newUser.id, '9a43e730-v8b2-11ea-rkee-f9ea9843fer1');
          this.notificationService.showNotification(
            'User: "' + newUser.username + '" was added to students\'s list', null, 5, 'Success');
        }
      } else {
        newUser.dateModified = new Date(Date.now());
        this.userService.updateUser(newUser);
        this.notificationService.showNotification(
          'User: "' + newUser.username + '" was updated', null, 5, 'Success');
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
