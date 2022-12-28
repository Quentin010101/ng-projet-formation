import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { AuthNavigationModule } from './auth-navigation.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import {  AuthGuardService } from './auth-guard.service';
import { MatIconModule } from '@angular/material/icon'
import { GoBackComponent } from './go-back/go-back.component';




@NgModule({
  declarations: [
    GoBackComponent,
    LoginComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    AuthNavigationModule,
    FormsModule,
    MatIconModule
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
