import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-avatar-form',
  templateUrl: './avatar-form.component.html',
  styleUrls: ['./avatar-form.component.scss']
})
export class AvatarFormComponent {
  
  @Input() user:User[]
  avatarPreview: string


  onSubmitAvatar(){}
  onFileSelected(e: Event){
    const files: FileList | null = (e.target as HTMLInputElement).files

    // Check if file exist
    if(files && files[0]){
      const reader = new FileReader()
      reader.readAsDataURL(files[0]);
      reader.onload = () => this.avatarPreview = reader.result as string
    }

  }
}
