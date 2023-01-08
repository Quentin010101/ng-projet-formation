import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCaroussel]'
})
export class CarousselDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseup') onMouseUp() : void {
    let carousel = this.el.nativeElement.querySelector('.caroussel')
    let style = window.getComputedStyle(carousel, null)
    console.log(style.getPropertyValue("transform"))

  }

}
