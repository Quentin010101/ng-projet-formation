import { Component } from '@angular/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {

  setLightMode(e: Event){
    if((e.target as HTMLInputElement).checked){
      document.body.classList.add("dark")
    }
  }
  setDarkMode(){

  }
}
