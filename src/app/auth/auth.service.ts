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
      let dataUser = data[0]
      if(dataUser && dataUser.password === password){
        this.loggedIn.next(true)
        this.role.next(dataUser.role)
        localStorage.setItem('id', dataUser.id.toString())
      } else{
        this.loggedIn.next(false)
        this.role.next('')
      }
    })

    return of(true).pipe(delay(1000), tap(()=> {
    }))

  }
  logout(){
    localStorage.removeItem('id')
    this.loggedIn.next(false)
    this.role.next('')
  }

}