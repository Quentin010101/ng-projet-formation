import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
 
          //Handle the error here
 
          return throwError(err);    //Rethrow it back to component
        })
      )

  }
}
