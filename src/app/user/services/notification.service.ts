import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { UserNotificationComponent } from './../shared/user-notification/user-notification.component';



@Injectable()
export class NotificationService {
  constructor(
    public _snack: MatSnackBar
  ) { }

  public showNotification(msg, type, duration?, verticalPosition?, horizontalPosition?) {
    const _snackType = type !== undefined ? type : 'success';
    this._snack.openFromComponent(UserNotificationComponent, {
      duration: duration || 4000,
      horizontalPosition: horizontalPosition || 'end',
      verticalPosition: verticalPosition || 'top',
      data: { message: msg, snackType: _snackType, snackBar: this._snack }
    });
  }
}
