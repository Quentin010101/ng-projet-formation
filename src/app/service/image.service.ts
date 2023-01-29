import { HttpClient } from '@angular/common/http';
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
}
