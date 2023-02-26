import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserDto } from 'src/app/model/userDto';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-avatar-form',
  templateUrl: './avatar-form.component.html',
  styleUrls: ['./avatar-form.component.scss']
})
export class AvatarFormComponent {
  @Input() user: UserDto

  apiURL = environment.apiURL
  public message: string
  public errorMessage: string
  public avatarPreview: string
  private file: File

  constructor(private _userService: UserService){}

  onFileSelected(e: Event){
    const files: FileList | null = (e.target as HTMLInputElement).files

    // Check if file exist
    if(files && files[0]){
      this.file = files[0]
      const reader = new FileReader()
      reader.readAsDataURL(files[0]);
      reader.onload = () => this.avatarPreview = reader.result as string
    }

  }

  onSubmitAvatar(form: NgForm){
    this.errorMessage =''
    this.message = ''

    let formData = new FormData
    formData.append('file', this.file)
    formData.append('id', this.user.userid.toString())

    this._userService.updateAvatar(formData).subscribe({
      next: (data)=> {
        if(data.bool){
          this.message = data.message
          form.reset()
        }else{
          this.errorMessage = data.message
        }
      }
        ,
      error: (error) => this.errorMessage = error
    })
  }

}
