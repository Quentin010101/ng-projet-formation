import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../service/auth.service";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _authservice: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if(this._authservice.isLoggedIn.value && this._authservice.userRole.value === route.data['role']){
    //   return true
    // }

    // this._authservice.urlLoged = state.url
    // this.router.navigate(['/login'])
    return true
  }
}