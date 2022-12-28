import {  Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";


@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false)
  role!: string

  urlLoged!: string

  get isLoggedIn() {
    return this.loggedIn.asObservable()
  }

  authenticate( pseudo: string, password : string): Observable<boolean>{
    let admin = {pseudo: 'admin', password: 'admin'}
    let user = {pseudo: 'user', password: 'user'}

    let isLogedAsAdmin = (admin.pseudo === pseudo && admin.password === password)
    let isLogedAsUser = (user.pseudo === pseudo && user.password === password)

    let isLoged = false

    if(isLogedAsAdmin){
      isLoged = true
      this.role = 'ROLE_ADMIN'
    }
    if(isLogedAsUser){
      isLoged = true
      this.role = 'ROLE_USER'
    }

    return of(true).pipe(delay(1000), tap(()=> {
      this.loggedIn.next(isLoged)
    }))

  }
  logout(){
    this.loggedIn.next(false)
    this.role = ''
  }

  getRole(){
    return this.role
  }


}