import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { User } from "../model/user";
import { Observable } from 'rxjs'


@Injectable()
export class UserService {

  constructor(private http: HttpClient){}
  url: string = "http://localhost:8080/user"

  getUser(id: number): Observable<User>{
    return this.http.get<User>(this.url + "/show?id=" + id)
  }

  updateUser(user: User): Observable<User>{
    return this.http.post<User>(this.url + "/update", user)
  }
}