import { Component } from '@angular/core';
import { Animation } from 'src/app/animation/animation-route';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [
    Animation.animateTrigger
  ]
})
export class SettingsComponent {

}
