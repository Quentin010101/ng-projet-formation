import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from '../global/footer/footer.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { ContactComponent } from './contact/contact.component';
import { TemplateComponent } from './template/template.component';
import { GlobalModule } from '../global/global.module';




@NgModule({
  declarations: [
    TemplateComponent,
    HomeComponent,
    CategoryComponent,
    FooterComponent,
    CategoryDetailComponent,
    ContactComponent,
  ],
  imports: [
    GlobalModule,
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
