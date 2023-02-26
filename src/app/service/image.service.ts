import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, mergeMap, switchMap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { HomePageCount } from '../model/homePageCount';
import { Image } from '../model/image';
import { Message } from '../model/message';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = environment.apiURL + '/image'

  constructor(private http: HttpClient, private _authService: AuthService) { }

  getTopImage(): Observable<Image[]>{
    return this.http.get<Image[]>(this.url + "/topimage")
  }

  getFeed(): Observable<Image[]>{
    this._authService.reset()
    let option = new HttpHeaders ()
    option.set('Access-Control-Allow-Credentials', 'true').set('Access-Control-Allow-Origin', '*');

    return this.http.get<Image[]>(this.url + "/feed", { withCredentials: true })
  }

  saveImage(data: FormData):Observable<Message>{
      this._authService.reset()
      return this.http.post<Message>(this.url + "/save", data, {withCredentials: true}).pipe(
        catchError(this.handleError)
      )
  }

  getHomePageCount(): Observable<HomePageCount> {
    return this.http.get<HomePageCount>(this.url + "/homepagecount")
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

