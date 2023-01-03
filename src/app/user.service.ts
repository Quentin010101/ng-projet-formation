import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { User } from "./model/user";
import { Observable } from 'rxjs'


@Injectable()
export class UserService {
  url: string = 'api/users'

  constructor(private http: HttpClient){}

  getCurrentUser(): Observable<User>{
    const id = localStorage.getItem('id')

    return this.http.get<User>(`${this.url}?id=${id}`)
  }
}