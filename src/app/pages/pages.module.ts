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
import { ExploreComponent } from './home/explore/explore.component';
import { HomeCategoryComponent } from './home/category/category.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { RouterModule } from '@angular/router';





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
    ExploreComponent,
    HomeCategoryComponent,
    ContactFormComponent,
  ],
  imports: [
    GlobalModule,
    CommonModule,
    PagesRoutingModule,
    RouterModule,
  ]
})
export class PagesModule { }
