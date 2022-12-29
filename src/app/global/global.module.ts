import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavigationBarComponent } from './navigation/dashboard-navigation-bar/dashboard-navigation-bar.component';
import { PrimaryNavigationBarComponent } from './navigation/primary-navigation-bar/primary-navigation-bar.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { DashboardUserRoutingModule } from '../dashboard/dashboard-user-routing.module';
import { AdminNavigationBarComponent } from './navigation/admin-navigation-bar/admin-navigation-bar.component';
import { DashboardAdminRoutingModule } from '../dashboard/dashboard-admin-routing.module';



@NgModule({
  declarations: [
    DashboardNavigationBarComponent,
    PrimaryNavigationBarComponent,
    AdminNavigationBarComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DashboardUserRoutingModule,
    DashboardAdminRoutingModule
  ],
  exports:[
    DashboardNavigationBarComponent,
    PrimaryNavigationBarComponent,
    AdminNavigationBarComponent,
  ]
})
export class GlobalModule { }
