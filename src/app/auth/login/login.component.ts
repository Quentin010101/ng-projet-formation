import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/auth';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  message!: string;
  auth: Auth

  constructor(private _authservice: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth = new Auth
  }

  onSubmit() {
    this._authservice.logIn(this.auth).subscribe({
      next: (data) => {
        if(data.bool){
          this._authservice.loggedIn.next(true);

          // Expiration Date
          let now = new Date()

          // Store in browser
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('expiration', now.getTime().toString());

          this.router.navigate(['/dashboard/feed'])
        }else{
          this.message = data.message
        }
      },
      error: (error) => this.message = error.message
    })
  }



}
