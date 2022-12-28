import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { DashboardTemplateComponent } from './user/dashboard-template/dashboard-template.component';
import { ImageFeedComponent } from './user/image-feed/image-feed.component';
import { ImageUpdateComponent } from './user/image-update/image-update.component';
import { PrivacyComponent } from './user/privacy/privacy.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';

const dashboardRoutes: Routes = [
  { path: 'dashboard', redirectTo: 'dashboard/feed', pathMatch: 'full' },
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    component: DashboardTemplateComponent,
    children: [

      { path: 'feed', component: ImageFeedComponent },
      { path: 'edit', component: ImageUpdateComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'profile', component: ProfileComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [],
})
export class DashboardRoutingModule {}
