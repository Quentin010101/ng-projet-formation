import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  category: Category

  constructor(private categoryservice: CategoryService, private route: ActivatedRoute){}

  ngOnInit(){
    let id = Number(this.route.snapshot.paramMap.get('id'))
    this.categoryservice.getCategory(id).subscribe({
      next: data => this.category = data
    })
  }

}
