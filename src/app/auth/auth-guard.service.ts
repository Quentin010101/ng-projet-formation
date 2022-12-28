import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _authservice: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // verifie si l'utilisateur est loged
    if(this._authservice.isLogedIn){
      return true
    }

    this._authservice.urlLoged = state.url
    this.router.navigate(['/login'])
    return false
  }
}