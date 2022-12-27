import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-submit',
  templateUrl: './input-submit.component.html',
  styleUrls: ['./input-submit.component.scss']
})
export class InputSubmitComponent {
  @Input() value!: string
}
