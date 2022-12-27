import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';

const pagesRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'category/:id', component: CategoryDetailComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
