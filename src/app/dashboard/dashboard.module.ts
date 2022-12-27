import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ImageFeedComponent } from './image-feed/image-feed.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ImageUpdateComponent } from './image-update/image-update.component';
import { SettingsComponent } from './settings/settings.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ImageFeedComponent,
    ImageUpdateComponent,
    SettingsComponent,
    PrivacyComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule
  ]
})
export class DashboardModule { }
