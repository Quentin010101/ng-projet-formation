import { Component, OnInit  } from '@angular/core';
import { Image } from 'src/app/model/image';
import { UserDto } from 'src/app/model/userDto';
import { ImageService } from 'src/app/service/image.service';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit{
user: UserDto
userImages: Image[]

constructor(private _userservice: UserService, private _imageservice: ImageService){}

  ngOnInit(){
    this._userservice.getUser().subscribe({
      next: (data) => this.user = data,
    })
      this._imageservice.getFeed().subscribe({
        next: data => {this.userImages = data}
      })
  }

  }
