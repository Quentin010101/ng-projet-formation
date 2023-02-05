import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.scss']
})
export class UserUpdateFormComponent {

  public message: string
  public errorMessage: string

  user: User

  constructor(private _userservice: UserService){}

  ngOnInit(): void {
    this._userservice.getUser(1).subscribe({
      next: (data) => {this.user = data},
      error: (error) => this.errorMessage = error
    })
  }

  onSubmitUser(form: NgForm){
    this._userservice.updateUser(this.user).subscribe({
      next: () => {this.message = "Your personnal data has been updated."},
      error: (error) => this.errorMessage = error
    })

  }


}
