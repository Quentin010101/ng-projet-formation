import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";
import { User } from "../model/user";


@Injectable()
export class AuthService {

  constructor(private http: HttpClient){}

  authenticate( pseudo: string, password : string){




  }

  logout(){

  }

}