import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { ImageFeedComponent } from './user/image-feed/image-feed.component';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './user/settings/settings.component';
import { PrivacyComponent } from './user/privacy/privacy.component';
import { DashboardTemplateComponent } from './user/dashboard-template/dashboard-template.component';
import { GlobalModule } from '../global/global.module';
import { DashboardAdminTemplateComponent } from './admin/dashboard-admin-template/dashboard-admin-template.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ImageUpdateModule } from './user/image-update/image-update.module';
import { MessageModule } from './user/message/message.module';




@NgModule({
  declarations: [
    DashboardTemplateComponent,
    ImageFeedComponent,
    SettingsComponent,
    PrivacyComponent,
    DashboardAdminTemplateComponent,
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule,
    RouterModule,
    FormsModule,
    MatIconModule,
    ImageUpdateModule,
    GlobalModule,
    MessageModule
  ],
})
export class DashboardModule { }
