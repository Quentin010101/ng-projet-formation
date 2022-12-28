import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ImageFeedComponent } from './user/image-feed/image-feed.component';
import { RouterModule } from '@angular/router';
import { ImageUpdateComponent } from './user/image-update/image-update.component';
import { SettingsComponent } from './user/settings/settings.component';
import { PrivacyComponent } from './user/privacy/privacy.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DashboardTemplateComponent } from './user/dashboard-template/dashboard-template.component';
import { DashboardNavigationBarComponent } from '../global/navigation/dashboard-navigation-bar/dashboard-navigation-bar.component';




@NgModule({
  declarations: [
    ImageFeedComponent,
    ImageUpdateComponent,
    SettingsComponent,
    PrivacyComponent,
    ProfileComponent,
    DashboardTemplateComponent,
    DashboardNavigationBarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule
  ]
})
export class DashboardModule { }
