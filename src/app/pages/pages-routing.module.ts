import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';

const pagesRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: TemplateComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'category/:id', component: CategoryDetailComponent},
    {path: 'contact', component: ContactComponent},
  ]},
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
