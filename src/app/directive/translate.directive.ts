import { Directive, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appTranslate]',
})
export class TranslateDirective {
  @Input() delay: number;
  observer: IntersectionObserver;


  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver((entries) => {

      if (entries[0].isIntersecting === true) {
        this.el.nativeElement.style.transform = 'translateX(0%)';
        this.el.nativeElement.style.opacity = '1';
        this.el.nativeElement.style.transition = `all 0.3s ${
          this.delay / 1000
        }s ease`;

        this.unobserve();
      } else {
        this.el.nativeElement.style.transform = 'translateX(-40%)';
        this.el.nativeElement.style.opacity = '0';
      }
    });
    this.observer.observe(this.el.nativeElement as HTMLElement);
  }

  unobserve() {
    this.observer.disconnect();
  }
}
