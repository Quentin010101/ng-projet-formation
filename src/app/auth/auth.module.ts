import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { AuthNavigationModule } from './auth-navigation.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import {  AuthGuardService } from './auth-guard.service';
import { MatIconModule } from '@angular/material/icon'
import { GoBackComponent } from './go-back/go-back.component';
import { GlobalModule } from '../global/global.module';
import { GoBackDirective } from '../directive/go-back.directive';




@NgModule({
  declarations: [
    GoBackComponent,
    SignInComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    GlobalModule,
    FormsModule,
    AuthNavigationModule,
    MatIconModule,
  ],
  exports: [
    MatIconModule

  ],
  providers: [
    AuthService,
    AuthGuardService
  ]


})
export class AuthModule { }
