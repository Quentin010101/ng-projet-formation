import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-avatar-form',
  templateUrl: './avatar-form.component.html',
  styleUrls: ['./avatar-form.component.scss']
})
export class AvatarFormComponent {
  public message: string
  public errorMessage: string
  public user:User
  public avatarPreview: string
  private file: File

  constructor(private _userService: UserService){}

  ngOnInit(){
    this._userService.getUser(1).subscribe({
      next: (data) => this.user = data,
      error: (error) => this.errorMessage = error
    })
  }

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

  onSubmitAvatar(){
    this.errorMessage =''
    this.message = ''

    let formData = new FormData
    formData.append('file', this.file)
    formData.append('id', this.user.userid.toString())

    this._userService.updateAvatar(formData).subscribe({
      next: ()=> this.message = "Your avatar as been updated",
      error: (error) => this.errorMessage = error
    })
  }

}
