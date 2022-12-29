import {  Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";


@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false)
  private role = new BehaviorSubject<string>('')

  urlLoged!: string

  get userRole (){
    return this.role
  }
  get isLoggedIn() {
    return this.loggedIn
  }

  authenticate( pseudo: string, password : string): Observable<boolean>{
    let admin = {pseudo: 'admin', password: 'admin'}
    let user = {pseudo: 'user', password: 'user'}

    let isLogedAsAdmin = (admin.pseudo === pseudo && admin.password === password)
    let isLogedAsUser = (user.pseudo === pseudo && user.password === password)

    let isLogged = false
    let role = ''

    if(isLogedAsAdmin){
      isLogged = true
      role = 'ROLE_ADMIN'
    }
    if(isLogedAsUser){
      isLogged = true
      role = 'ROLE_USER'
    }

    return of(true).pipe(delay(1000), tap(()=> {
      this.loggedIn.next(isLogged)
      this.role.next(role)
    }))

  }
  logout(){
    this.loggedIn.next(false)
    this.role.next('')
  }



}