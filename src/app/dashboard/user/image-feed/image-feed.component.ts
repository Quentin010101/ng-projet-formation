import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/model/image';
import { ImageService } from 'src/app/service/image.service';


@Component({
  selector: 'image-feed-add',
  templateUrl: './image-feed.component.html',
  styleUrls: ['./image-feed.component.scss'],
})
export class ImageFeedComponent implements OnInit{
  userImages!: Image[]
  idUser: number = 1

  constructor(private imageservice: ImageService){}

  ngOnInit(){
    this.imageservice.getFeed(this.idUser).subscribe({
      next: data => this.userImages = data
    })
  }
}
