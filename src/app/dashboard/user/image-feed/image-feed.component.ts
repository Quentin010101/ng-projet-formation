import { Component } from '@angular/core';
import { Animation } from 'src/app/animation/animation-route';
import { IMAGE } from 'src/app/backend/image-mock';
import { Image } from 'src/app/model/image';


@Component({
  selector: 'image-feed-add',
  templateUrl: './image-feed.component.html',
  styleUrls: ['./image-feed.component.scss'],
  animations: [
    Animation.animateTrigger
  ]
})
export class ImageFeedComponent {
  userImages!: Image[]

  ngOnInit(){
    this.userImages = IMAGE
  }
}
