import { Component } from '@angular/core';
import { Animation } from 'src/app/animation/animation-route';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
  animations: [
    Animation.animateTrigger
  ]
})
export class PrivacyComponent {

}
