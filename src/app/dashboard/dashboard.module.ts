import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { ImageFeedComponent } from './user/image-feed/image-feed.component';
import { RouterModule } from '@angular/router';
import { ImageUpdateComponent } from './user/image-update/image-update.component';
import { SettingsComponent } from './user/settings/settings.component';
import { PrivacyComponent } from './user/privacy/privacy.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DashboardTemplateComponent } from './user/dashboard-template/dashboard-template.component';
import { GlobalModule } from '../global/global.module';
import { DashboardAdminTemplateComponent } from './admin/dashboard-admin-template/dashboard-admin-template.component';
import { MessageComponent } from './admin/message/message.component';




@NgModule({
  declarations: [
    DashboardTemplateComponent,
    ImageFeedComponent,
    ImageUpdateComponent,
    SettingsComponent,
    PrivacyComponent,
    ProfileComponent,
    DashboardAdminTemplateComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    GlobalModule,
    DashboardUserRoutingModule,
    RouterModule,
  ]
})
export class DashboardModule { }
