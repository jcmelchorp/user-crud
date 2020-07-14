import { Component, OnInit, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/user.model';

@Component({
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.scss']
})
export class ConfirmUserComponent implements OnInit {
  confirmation: Subject<boolean> = new Subject();
  constructor(
    public dialogRef: MatDialogRef<ConfirmUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onConfirm() {
    this.confirmation.next(true);
    this.dialogRef.close();
  }
}
