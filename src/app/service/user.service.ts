import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { User } from "../model/user";
import { Observable, catchError, throwError } from 'rxjs'
import { environment } from "src/environments/environments";
import { UserDto } from "../model/userDto";
import { Message } from "../model/message";
import { AuthService } from "./auth.service";


@Injectable()
export class UserService {


  constructor(private http: HttpClient, private _authservice: AuthService){}
  url: string = environment.apiURL + "/user"

  getUser(): Observable<UserDto>{
    this._authservice.reset()
    return this.http.get<UserDto>(this.url + "/show", {withCredentials: true})
  }

  updateUser(user: UserDto): Observable<Message>{
    this._authservice.reset()
    return this.http.post<Message>(this.url + "/update/user", user, {withCredentials: true}).pipe(
      catchError(this.handleError)
    )
  }

  updateAvatar(formData:FormData): Observable<Message>{
    this._authservice.reset()
    return this.http.post<Message>(this.url + "/update/avatar", formData, {withCredentials: true}).pipe(
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