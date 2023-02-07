import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = "http://localhost:8080/image"

  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<Category[]>{
    return this.http.get<Category[]>(this.url + "/categorylist")
  }

  getTopCategory(): Observable<Category[]>{
    console.log("get category")
    return this.http.get<Category[]>(this.url + "/topcategory")
  }

  getCategory(type: string): Observable<Category>{
    return this.http.get<Category>(this.url + "/category?type=" + type)
  }
}
