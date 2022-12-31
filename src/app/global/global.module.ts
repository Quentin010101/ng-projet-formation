import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavigationBarComponent } from './navigation/dashboard-navigation-bar/dashboard-navigation-bar.component';
import { PrimaryNavigationBarComponent } from './navigation/primary-navigation-bar/primary-navigation-bar.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { DashboardUserRoutingModule } from '../dashboard/dashboard-user-routing.module';
import { AdminNavigationBarComponent } from './navigation/admin-navigation-bar/admin-navigation-bar.component';
import { DashboardAdminRoutingModule } from '../dashboard/dashboard-admin-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { IconTransitionDirective } from '../directive/icon-transition.directive';
import { ButtonCheckComponent } from './element/button-check/button-check.component';
import { NavigationHoverDirective } from '../directive/navigation-hover.directive';
import { GoBackDirective } from '../directive/go-back.directive';



@NgModule({
  declarations: [
    IconTransitionDirective,
    GoBackDirective,
    DashboardNavigationBarComponent,
    PrimaryNavigationBarComponent,
    AdminNavigationBarComponent,
    ButtonCheckComponent,
    NavigationHoverDirective,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DashboardUserRoutingModule,
    DashboardAdminRoutingModule,
    MatIconModule
  ],
  exports:[
    DashboardNavigationBarComponent,
    PrimaryNavigationBarComponent,
    AdminNavigationBarComponent,
    ButtonCheckComponent,
    MatIconModule,
    GoBackDirective,

  ],
  providers:[
  ]
})
export class GlobalModule { }
