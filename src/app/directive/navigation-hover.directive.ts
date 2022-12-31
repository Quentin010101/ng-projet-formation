import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[navigationHover]',
})
export class NavigationHoverDirective {
  currentColor: string

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hover();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.reinitialise();
  }

  hover() {
    this.currentColor = this.el.nativeElement.style.backgroundColor
    this.el.nativeElement.classList.add('link-hover')
    this.el.nativeElement.style.transition = 'background-color 0.2s ease'
  }
  reinitialise() {
    this.el.nativeElement.style.backgroundColor = this.currentColor;
    this.el.nativeElement.classList.remove('link-hover')
    this.el.nativeElement.style.transition = 'background-color 0.2s ease'
  }
}
