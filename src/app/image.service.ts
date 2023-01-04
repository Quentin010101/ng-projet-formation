import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from './model/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = 'api/'

  constructor(private http: HttpClient) { }

  uploadImage(file: FormData, title: string, description: string){
    this.http.post<Image>(this.url, {file: file, title: title, description: description})
  }
}
