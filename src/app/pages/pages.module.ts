import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from '../global/footer/footer.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ContactComponent } from './contact/contact.component';
import { TemplateComponent } from './template/template.component';
import { GlobalModule } from '../global/global.module';
import { CarousselComponent } from './home/caroussel/caroussel.component';
import { BannerComponent } from './home/banner/banner.component';
import { TranslateDirective } from '../directive/translate.directive';
import { OpacityDirective } from '../directive/opacity.directive';
import { CategorySingleComponent } from './category/category-single/category-single.component';
import { ExploreComponent } from './home/explore/explore.component';
import { HomeCategoryComponent } from './home/category/category.component';





@NgModule({
  declarations: [
    TemplateComponent,
    HomeComponent,
    CategoryComponent,
    FooterComponent,
    CategoryDetailComponent,
    ContactComponent,
    CarousselComponent,
    BannerComponent,
    TranslateDirective,
    OpacityDirective,
    CategorySingleComponent,
    ExploreComponent,
    HomeCategoryComponent,
  ],
  imports: [
    GlobalModule,
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
