import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";


@Injectable()
export class AuthService {
  isLogedIn: boolean = false
  role!: string


  urlLoged!: string

  authenticate( pseudo: string, password : string): Observable<boolean>{
    let admin = {pseudo: 'admin', password: 'admin'}
    let user = {pseudo: 'user', password: 'user'}

    let isLoged = (admin.pseudo === pseudo && admin.password === password)

    return of(true).pipe(delay(1000), tap(()=> {
      this.isLogedIn = isLoged
      this.role = 'admin'
    }))

  }


}