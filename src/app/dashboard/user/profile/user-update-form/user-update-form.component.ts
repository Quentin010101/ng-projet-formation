import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDto } from 'src/app/model/userDto';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.scss']
})
export class UserUpdateFormComponent {
  @Input() user: UserDto

  public message: string
  public errorMessage: string


  constructor(private _userservice: UserService){}

  onSubmitUser(form: NgForm){
    this._userservice.updateUser(this.user).subscribe({
      next: (data) => {
        if(data.bool){
          this.message = data.message
        }else{
          this.errorMessage = data.message
        }
      },
      error: (error) => this.errorMessage = error
    })

  }


}
