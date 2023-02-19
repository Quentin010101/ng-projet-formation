import { Component, OnInit  } from '@angular/core';
import { UserDto } from 'src/app/model/userDto';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit{
user: UserDto

constructor(private _userservice: UserService){}

  ngOnInit(){
    this._userservice.getUser().subscribe({
      next: (data) => this.user = data,
    })
  }

  }
