import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
} from '@angular/router';
import { environment } from 'src/environments/environments';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardService implements CanActivateChild {

  constructor(private _authservice: AuthService) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean{
    let now = new Date()
    if(Number(localStorage.getItem("expiration")) + environment.timeExpiration < now.getTime()){
      this._authservice.loggedIn.next(false)
    }
    return true
  }
}
