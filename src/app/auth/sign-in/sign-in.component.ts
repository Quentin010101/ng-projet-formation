import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  message!: string
  user: User

  constructor(private http: HttpClient, private _authservice: AuthService, private router: Router){}

  ngOnInit(){
    this.user = new User
  }

  onSubmit(){
      this._authservice.register(this.user).subscribe({
        next: (data) => {
          if(data.bool){
            this.router.navigate(['/home'])
          } else{
            this.message = data.message
          }
        },
        error: (error) => {
          this.message = error.message
        }
      })
  }
}
