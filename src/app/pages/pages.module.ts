import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryNavigationBarComponent } from '../global/navigation/primary-navigation-bar/primary-navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from '../global/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';




@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    PrimaryNavigationBarComponent,
    FooterComponent,
    CategoryDetailComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
