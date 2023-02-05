import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { User } from "../model/user";
import { Observable, catchError, throwError } from 'rxjs'


@Injectable()
export class UserService {

  constructor(private http: HttpClient){}
  url: string = "http://localhost:8080/user"

  getUser(id: number): Observable<User>{
    return this.http.get<User>(this.url + "/show?id=" + id)
  }

  updateUser(user: User): Observable<User>{
    return this.http.post<User>(this.url + "/update/user", user).pipe(
      catchError(this.handleError)
    )
  }

  updateAvatar(formData:FormData){
    return this.http.post<User>(this.url + "/update/avatar", formData).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error:any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // erreur client
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // erreur serveur
      errorMessage = `Something went wrong, Back-end return code error: ${error.status}`;
    }

    return throwError(() => {return errorMessage})
  }
}