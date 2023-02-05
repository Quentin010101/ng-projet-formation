import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Image } from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = 'http://localhost:8080/image'

  constructor(private http: HttpClient) { }

  getTopImage(): Observable<Image[]>{
    return this.http.get<Image[]>(this.url + "/topimage")
  }

  getFeed(id: number): Observable<Image[]>{
    return this.http.get<Image[]>(this.url + "/feed?id=" + id)
  }

  saveImage(data: FormData):Observable<any>{

      return this.http.post(this.url + "/save", data).pipe(
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

