import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = 'api/images'

  constructor(private http: HttpClient) { }

  uploadImage(file: FormData, title: string, description: string){
    return this.http.post<Image>(this.url, {file: file, title: title, description: description})
  }

  getImages(): Observable<Image[]>{
    return this.http.get<Image[]>(this.url)
  }
}
