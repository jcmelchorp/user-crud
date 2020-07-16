import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition, } from '@angular/material/snack-bar';
import { UserNotificationComponent } from './../shared/user-notification/user-notification.component';



@Injectable()
export class NotificationService {
  constructor(
    public snack: MatSnackBar
  ) { }

  public showNotification(
    msg: string,
    type: string,
    miliseconds?: number,
    verticalPosition?: MatSnackBarVerticalPosition,
    horizontalPosition?: MatSnackBarHorizontalPosition
  ) {
    this.snack.openFromComponent(UserNotificationComponent, {
      duration: miliseconds * 1000 || 5000,
      horizontalPosition: horizontalPosition || 'center',
      verticalPosition: verticalPosition || 'top',
      data: {
        message: msg,
        snackType: type !== undefined ? type : 'info',
        snackBar: this.snack
      }
    });
  }
}
