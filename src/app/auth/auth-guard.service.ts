import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { environment } from 'src/environments/environments';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private _authservice: AuthService, private router: Router) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean{
    if (this.isLoggedIn()) {
      this._authservice.reset()
      return true;
    }
    // navigate to login page as user is not authenticated
    this.router.navigate(['/login']);
    return false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isLoggedIn()) {
      this._authservice.reset()
      return true;
    }
    // navigate to login page as user is not authenticated
    this.router.navigate(['/login']);
    return false;
  }

  public isLoggedIn(): boolean {
    let status = false;
    let now = new Date();

    if (
      this._authservice.loggedIn.subscribe() &&
      Number(localStorage.getItem('expiration')) + environment.timeExpiration >
        now.getTime()
    ) {
      status = true;
    } else {
      this._authservice.loggedIn.next(false)
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('date');
      status = false;
    }
    return status;
  }
}
