import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ImageFeedComponent } from './image-feed/image-feed.component';
import { ImageUpdateComponent } from './image-update/image-update.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

const dashboardRoutes: Routes = [
  {path: 'dashboard', redirectTo: 'dashboard/feed', pathMatch: 'full'},
  {path: 'dashboard',component: DashboardComponent, children: [
    {path: 'feed', component: ImageFeedComponent},
    {path: 'edit', component: ImageUpdateComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'profile', component: ProfileComponent},

  ]},
]

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [

  ]
})
export class DashboardRoutingModule { }
