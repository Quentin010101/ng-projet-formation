import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const adminDashboardRoutes: Routes = [

]

@NgModule({
  imports: [
    RouterModule.forChild(adminDashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardAdminRoutingModule { }
