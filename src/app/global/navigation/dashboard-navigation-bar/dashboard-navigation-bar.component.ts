import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';




@Component({
  selector: 'app-dashboard-navigation-bar',
  templateUrl: './dashboard-navigation-bar.component.html',
  styleUrls: ['./dashboard-navigation-bar.component.scss'],
})
export class DashboardNavigationBarComponent {

  constructor(private _authService: AuthService, private router: Router){}

  logOut(){
    this._authService.logout()
    this.router.navigate(['login'])
  }
}
