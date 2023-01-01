import { Component } from '@angular/core';
import { Animation } from 'src/app/animation/animation-route';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    Animation.animateTrigger
  ]
})
export class ProfileComponent {

}
