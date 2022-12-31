import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";
import { User } from "../model/user";


@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false)
  private role = new BehaviorSubject<string>('')
  private url = 'api/users'
  urlLoged!: string

  constructor(private http: HttpClient){}

  get userRole (){
    return this.role
  }
  get isLoggedIn() {
    return this.loggedIn
  }

  authenticate( pseudo: string, password : string): Observable<boolean>{

    this.http.get<User[]>(`${this.url}?pseudo=${pseudo}`).subscribe((data)=>{
      if(data[0] && data[0].password === password){
        this.loggedIn.next(true)
        this.role.next(data[0].role)
      } else{
        this.loggedIn.next(false)
        this.role.next('')
      }
    })

    return of(true).pipe(delay(1000), tap(()=> {
    }))

  }
  logout(){
    this.loggedIn.next(false)
    this.role.next('')
  }

}