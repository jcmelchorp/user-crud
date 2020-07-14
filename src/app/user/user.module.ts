import { ConfirmUserComponent } from './components/confirm-user/confirm-user.component';
import { RolesComponent } from './containers/roles/roles.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotificationService } from './services/notification.service';
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material.module';
import { UserComponent } from './containers/user/user.component';
import { SaveUserComponent } from './components/save-user/save-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './components/users-list/users-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './state/user.reducer';
import { UserEffect } from './state/user.effects';
import { UserNotificationComponent } from './shared/user-notification/user-notification.component';


@NgModule({
  declarations: [
    UserComponent,
    SaveUserComponent,
    UsersListComponent,
    RolesComponent,
    UserNotificationComponent,
    ConfirmUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffect]),

  ],
  providers: [UserService, NotificationService],
  entryComponents: [
    UserNotificationComponent
  ]
})
export class UserModule { }
