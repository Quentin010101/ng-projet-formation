import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-check',
  templateUrl: './button-check.component.html',
  styleUrls: ['./button-check.component.scss']
})
export class ButtonCheckComponent {
  @Input() value!: string
  @Input() disabled!: boolean

}
