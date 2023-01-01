import { Component } from '@angular/core';
import { Animation } from 'src/app/animation/animation-route';


@Component({
  selector: 'app-image-update',
  templateUrl: './image-update.component.html',
  styleUrls: ['./image-update.component.scss'],
  animations: [
    Animation.animateTrigger
  ]
})
export class ImageUpdateComponent {

}
