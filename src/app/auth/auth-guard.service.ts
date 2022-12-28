import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _authservice: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // Role de l'utilisateur
    //
    // // verifie si l'utilisateur est loged
    // console.log(route.data['role'].indexOf(userRole))
    // if(this._authservice.isLogedIn && (route.data['role'] && route.data['role'].indexOf(userRole) !== -1)){
    //   return true
    // }

    const userRole = this._authservice.getRole()

    return this._authservice.isLoggedIn.pipe(take(1),
      map((isLoggedIn: boolean) => {
        if (isLoggedIn && (route.data['role'] && route.data['role'].indexOf(userRole) !== -1)){

          return true

        }
        this._authservice.urlLoged = state.url
        this.router.navigate(['/login'])
        return false


      })
    )
  }

}