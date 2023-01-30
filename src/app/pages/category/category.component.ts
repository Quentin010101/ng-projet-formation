import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Category[]

  constructor(private categoryservice: CategoryService){}

  ngOnInit(){
    this.categoryservice.getCategoryList().subscribe({
      next: data => {
        this.categories = data
      }
    })
  }
}
