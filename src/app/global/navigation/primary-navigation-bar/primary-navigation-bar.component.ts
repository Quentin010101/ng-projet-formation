import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-primary-navigation-bar',
  templateUrl: './primary-navigation-bar.component.html',
  styleUrls: ['./primary-navigation-bar.component.scss'],
})
export class PrimaryNavigationBarComponent implements OnInit{


  constructor(private _authService: AuthService) {}

  ngOnInit(){

  }

  logOut(){
    this._authService.logout()
  }


}
