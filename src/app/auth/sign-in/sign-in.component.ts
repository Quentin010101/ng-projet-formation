import { Component } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  message!: string
  pseudo!: string
  email!: string
  password!: string

  onSubmit(){

  }
}
