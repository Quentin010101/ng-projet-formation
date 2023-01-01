import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGoBack]'
})
export class GoBackDirective {
  elementIcon!: HTMLElement
  elementSpan!: HTMLElement

  constructor(private elementRef: ElementRef) {
   }

   ngOnInit(){
    this.elementIcon = this.elementRef.nativeElement.querySelector('mat-icon')
    this.elementSpan = this.elementRef.nativeElement.querySelector('span')
   }

  @HostListener('mouseenter') onMouseEnter(): void{
    this.translateLeft()
  }
  @HostListener('mouseleave') onMouseLeave(): void{
    this.translateRight()
  }

  private translateLeft(){
    this.elementIcon.style.transform = 'translateX(-0.3rem)';
    this.elementIcon.style.transition = 'transform 0.2s ease-in';


  }
  private translateRight(){
    this.elementIcon.style.transform = 'translateX(0)';
  }
}
