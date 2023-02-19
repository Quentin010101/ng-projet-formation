import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, mergeMap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Image } from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = environment.apiURL + '/image'

  constructor(private http: HttpClient) { }

  getTopImage(): Observable<Image[]>{
    return this.http.get<Image[]>(this.url + "/topimage")
  }

  getFeed(): Observable<Image[]>{
    let option = new HttpHeaders ()
    option.set('Access-Control-Allow-Credentials', 'true').set('Access-Control-Allow-Origin', '*');

    return this.http.get<Image[]>(this.url + "/feed", { withCredentials: true })
  }

  saveImage(data: FormData, image: Image):Observable<any>{
    console.log('hi')

      return this.http.post<string>(this.url + "/savefile", data, {withCredentials: true}).pipe(
        mergeMap((datay) =>{
          console.log("data" + datay)
          return this.http.post(this.url + "/save", image, {withCredentials: true}).pipe(
            catchError(this.handleError)
          )
        })
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

