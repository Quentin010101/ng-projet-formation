import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { DashboardTemplateComponent } from './user/dashboard-template/dashboard-template.component';
import { ImageFeedComponent } from './user/image-feed/image-feed.component';
import { ImageUpdateComponent } from './user/image-update/image-update.component';
import { MessageComponent } from './user/message/message.component';
import { PrivacyComponent } from './user/privacy/privacy.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';
import { DashboardAdminTemplateComponent } from './admin/dashboard-admin-template/dashboard-admin-template.component';
import { MessageComponent as MessageAdminComponent } from './admin/message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard',

    data: {
      role: 'ROLE_USER',
    },

    component: DashboardTemplateComponent,
    canActivateChild: [AuthGuardService],
    children: [
      { path: '' , redirectTo: 'feed', pathMatch: 'full'},
      { path: 'feed', component: ImageFeedComponent },
      { path: 'edit', component: ImageUpdateComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'message', component: MessageComponent },
    ],
  },
  {
    path: 'admin',
    component: DashboardAdminTemplateComponent,
    canActivate: [AuthGuardService],
    data: {
      role: 'ROLE_ADMIN',
    },
    children: [
      { path: 'message', component: MessageAdminComponent }
    ],
  },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forChild(dashboardRoutes)],
  exports: [],
})
export class DashboardUserRoutingModule {}
