import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { AuthNavigationModule } from './auth-navigation.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import {  AuthGuardService } from './auth-guard.service';




@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    AuthNavigationModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]


})
export class AuthModule { }
