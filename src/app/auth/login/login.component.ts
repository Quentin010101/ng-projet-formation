import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  pseudo!: string
  password!: string
  message!: string

  constructor(private _authservice: AuthService, private router: Router){}

onSubmit(){
  this._authservice.authenticate(this.pseudo, this.password).subscribe({
    next: () => {
      this.setMessage()
      if(this._authservice.isLogedIn){
        // verifie si l'utilisateur à été redirigé sur login
        let redirect = this._authservice.urlLoged ? this._authservice.urlLoged : '/home'
        this.router.navigate([redirect])
      } else {
        this.password = ''
      }
    },
    error: error => console.log(error)
  })
}

setMessage(){
  this.message = this._authservice.isLogedIn ? 'You are aleady loged in' : 'You are not loged in'
}

}
