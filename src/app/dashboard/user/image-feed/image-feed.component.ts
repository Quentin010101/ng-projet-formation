import { Component, OnInit } from '@angular/core';
import { IMAGE } from 'src/app/backend/image-mock';
import { Image } from 'src/app/model/image';


@Component({
  selector: 'image-feed-add',
  templateUrl: './image-feed.component.html',
  styleUrls: ['./image-feed.component.scss'],
})
export class ImageFeedComponent implements OnInit{
  userImages!: Image[]

  ngOnInit(){
    this.userImages = IMAGE
  }
}
