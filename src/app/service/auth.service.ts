import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Observable, throwError, catchError, BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environments";
import { Auth } from "../model/auth";
import { Message } from "../model/message";
import { User } from "../model/user";


@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {
  url: string = environment.apiURL
  loggedIn = new BehaviorSubject(false)

  constructor(private http: HttpClient){
  }


  logIn(auth: Auth): Observable<Message>{
      let now = new Date()
      localStorage.setItem('expiration', now.getTime().toString())

      return this.http.post<Message>(this.url + "/login", auth, {withCredentials: true}).pipe(
        catchError(this.handleError)
      );
  }

  register(user: User): Observable<Message>{
    return this.http.post<Message>(this.url + "/signin", user).pipe(
      catchError(this.handleError)
    );
  }

  logout() {
    this.loggedIn.next(false)
    localStorage.removeItem('expiration');

    this.http.get(this.url + "/logout", {withCredentials: true}).subscribe()
  }


  handleError(error:any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // erreur client
      console.log(error.error.message)
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // erreur serveur
      console.log(error.message)

      errorMessage = `Something went wrong, Back-end return code error: ${error.status}`;
    }

    return throwError(() => {return errorMessage})
  }
}