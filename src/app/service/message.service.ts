import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Message } from '../model/message';
import { UserMessage } from '../model/userMessage';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService{
  url: string = environment.apiURL + '/message'

  constructor(private http: HttpClient){}

  getAllMessages(): Observable<UserMessage[]>{
    return this.http.get<UserMessage[]>(this.url + "/getall", {withCredentials: true}).pipe(
      catchError(this.handleError)
    )
  }
  sendMessage(message: UserMessage): Observable<Message>{
    return this.http.post<Message>(this.url + "/send", message, {withCredentials: true}).pipe(
      catchError(this.handleError)
    )
  }
  deleteMessage(message: UserMessage): Observable<Message>{
    return this.http.post<Message>(this.url + "/delete", message, {withCredentials: true}).pipe(
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