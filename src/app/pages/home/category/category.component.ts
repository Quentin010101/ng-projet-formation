import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-home-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class HomeCategoryComponent implements OnInit {
  apiURL: string = environment.apiURL

  categories: Category[]

  constructor(private categoryservice: CategoryService){}

  ngOnInit(){
      this.categoryservice.getTopCategory().subscribe({
        next: (data) =>
        {
          this.categories = data
        }
      })
  }

}
