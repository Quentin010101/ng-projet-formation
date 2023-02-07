import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Category[]
  apiURL = environment.apiURL;

  constructor(private categoryservice: CategoryService){}

  ngOnInit(){
    this.categoryservice.getCategoryList().subscribe({
      next: data => {
        this.categories = data
      }
    })
  }
}
