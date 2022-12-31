import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGoBack]'
})
export class GoBackDirective {
  element!: HTMLElement

  constructor(private elementRef: ElementRef) {
   }

   ngOnInit(){
    this.element = this.elementRef.nativeElement.querySelector('mat-icon')
   }

  @HostListener('mouseenter') onMouseEnter(): void{
    this.translateLeft()
  }
  @HostListener('mouseleave') onMouseLeave(): void{
    this.translateRight()
  }

  private translateLeft(){
    this.element.style.transform = 'translateX(-0.3rem)';
    this.element.style.transition = 'transform 0.2s ease-in';

  }
  private translateRight(){
    this.element.style.transform = 'translateX(0)';

  }
}
