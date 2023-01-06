import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarFormComponent } from './avatar-form/avatar-form.component';
import { FormsModule } from '@angular/forms';
import { GlobalModule } from 'src/app/global/global.module';
import { ProfileComponent } from './profile.component';
import { UserUpdateFormComponent } from './user-update-form/user-update-form.component';
import { StatistiqueComponent } from './statistique/statistique.component';



@NgModule({
  declarations: [
    ProfileComponent,
    AvatarFormComponent,
    UserUpdateFormComponent,
    StatistiqueComponent,
  ],
  imports: [
    CommonModule,
    GlobalModule,
    FormsModule,
  ]
})
export class ProfileModule { }
