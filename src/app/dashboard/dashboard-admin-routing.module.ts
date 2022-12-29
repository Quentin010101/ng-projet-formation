import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { DashboardAdminTemplateComponent } from './admin/dashboard-admin-template/dashboard-admin-template.component';
import { MessageComponent } from './admin/message/message.component';

const adminDashboardRoutes: Routes = [
  {path: 'admin',
  component: DashboardAdminTemplateComponent,
  canActivate: [AuthGuardService],
  data: {
    role: 'ROLE_ADMIN'
  },
  children: [
    {path: 'message', component: MessageComponent}
  ]
}
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
