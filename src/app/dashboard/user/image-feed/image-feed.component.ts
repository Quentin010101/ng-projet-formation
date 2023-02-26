import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/model/image';
import { ImageService } from 'src/app/service/image.service';
import { environment } from 'src/environments/environments';


@Component({
  selector: 'image-feed-add',
  templateUrl: './image-feed.component.html',
  styleUrls: ['./image-feed.component.scss'],
})
export class ImageFeedComponent implements OnInit{
  apiURL = environment.apiURL
  userImages!: Image[]

  constructor(private imageservice: ImageService){}

  ngOnInit(){
    this.imageservice.getFeed().subscribe({
      next: data => {this.userImages = data}
    })
  }
}
