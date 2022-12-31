import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appIconTransition]'
})
export class IconTransitionDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(): void{
    this.scale()
  }
  @HostListener('mouseleave') onMouseLeave(): void{
    this.unScale()
  }

  private scale(){
    this.elementRef.nativeElement.style.transform = 'scale(1.2)';
    this.elementRef.nativeElement.style.transition = 'transform 0.2s ease-out';

  }
  private unScale(){
    this.elementRef.nativeElement.style.transform = 'scale(1)'
  }

}
