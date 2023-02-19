import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-primary-navigation-bar',
  templateUrl: './primary-navigation-bar.component.html',
  styleUrls: ['./primary-navigation-bar.component.scss'],
})
export class PrimaryNavigationBarComponent implements OnInit{
  isLogged: boolean

  constructor(private _authService: AuthService, private router: Router, public authService: AuthService) {}

  ngOnInit(){
    this._authService.loggedIn.subscribe(
      (data) => {this.isLogged = data}
    )
  }

  logOut(){
    this._authService.logout()
  }


}
