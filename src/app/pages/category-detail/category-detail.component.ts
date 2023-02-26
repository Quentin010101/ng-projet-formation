import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  category: Category
  apiURL = environment.apiURL;

  constructor(private categoryservice: CategoryService, private route: ActivatedRoute){}

  ngOnInit(){
    let type = this.route.snapshot.paramMap.get('id')
    this.categoryservice.getCategory(type as string).subscribe({
      next: (data) => {this.category = data}
    })
  }

  show(event: Event){
    console.log("test");
    const el = (event.target as HTMLElement).parentNode?.parentNode?.cloneNode(true) as HTMLElement
    el.classList.add("show")

    if(el){
      document.body.appendChild(el as HTMLElement)
      el.addEventListener('click', ()=> {
        document.body.removeChild(el)
      })
    }
  }

}
