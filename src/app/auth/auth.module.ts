import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { AuthNavigationModule } from './auth-navigation.module';
import { FormModule } from '../global/input-element/form.module';



@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    AuthNavigationModule,
    FormModule
  ],

})
export class AuthModule { }
