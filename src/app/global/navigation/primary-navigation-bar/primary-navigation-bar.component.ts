import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-primary-navigation-bar',
  templateUrl: './primary-navigation-bar.component.html',
  styleUrls: ['./primary-navigation-bar.component.scss'],
})
export class PrimaryNavigationBarComponent implements OnInit{
  isLoggedIn$: Observable<boolean>;

  constructor(private _authService: AuthService) {}

  ngOnInit(){
    this.isLoggedIn$ = this._authService.isLoggedIn
  }


}
