import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit{
  user: User

  constructor(private _userservice: UserService){}

  ngOnInit(): void {
    this._userservice.getCurrentUser().subscribe(data => {this.user = data})
  }


  }
