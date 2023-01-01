import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';




@Component({
  selector: 'app-dashboard-navigation-bar',
  templateUrl: './dashboard-navigation-bar.component.html',
  styleUrls: ['./dashboard-navigation-bar.component.scss'],
})
export class DashboardNavigationBarComponent {

  constructor(private _authService: AuthService){}

  logOut(){
    this._authService.logout()
  }
}
