import { Directive, ElementRef, HostListener } from '@angular/core';
import { fromEvent, merge, Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[imageScaleDirective]'
})
export class ImageScaleDirective {
  $timer : Subscription

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(): void{

    window.innerWidth > 1200 ? this.observe() : ''
  }
  @HostListener('mouseleave') onMouseLeave(): void{
    this.unScale()
  }

  private observe(){
    const hover = fromEvent(this.elementRef.nativeElement, 'mouseleave')
    const clock = new Observable(observer => {
      setTimeout(() => { observer.next(true)}, 200)
    })
    const observer$ = merge(hover, clock)
    this.$timer = observer$.subscribe((value) => {
    if(value === true){
      this.scale()
    }
    this.unObserve()

    })
  }
  private unObserve(){
    this.$timer.unsubscribe()
  }

  private scale(){
    this.elementRef.nativeElement.style.transform = 'scale(1.05)';
    this.elementRef.nativeElement.style.zIndex = 100
    this.elementRef.nativeElement.style.transition = 'transform 0.3s ease-in';

  }
  private unScale(){
    this.elementRef.nativeElement.style.transform = 'scale(1)'
    setTimeout(()=> {
      this.elementRef.nativeElement.style.zIndex = 1
    }, 300)
  }

}