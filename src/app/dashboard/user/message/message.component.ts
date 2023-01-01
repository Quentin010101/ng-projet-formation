import { Component } from '@angular/core';
import { Animation } from 'src/app/animation/animation-route';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [
    Animation.animateTrigger
  ]
})
export class MessageComponent {

}
