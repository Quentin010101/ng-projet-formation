import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-avatar-form',
  templateUrl: './avatar-form.component.html',
  styleUrls: ['./avatar-form.component.scss']
})
export class AvatarFormComponent {

  @Input() user: User
  fileToUpload: File | null = null;

  onSubmitAvatar(){}
  onFileSelected(e?: Event){

  }
}
