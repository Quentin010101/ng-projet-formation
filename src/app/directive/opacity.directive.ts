import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appOpacity]'
})
export class OpacityDirective {
  @Input() delay: number = 0
  isAlreadyRun: boolean = false

  constructor(private el : ElementRef) { }

  ngOnInit(){
    let observer = new IntersectionObserver(entries =>{
      if(!this.isAlreadyRun){
        if(entries[0].isIntersecting === true && !this.isAlreadyRun){
          this.el.nativeElement.style.opacity = '1'
          this.el.nativeElement.style.transition = `all 0.5s ${this.delay/1000}s ease`

          this.isAlreadyRun = true
        }else{
          this.el.nativeElement.style.opacity = '0'

        }
      }
    })

    observer.observe(this.el.nativeElement as HTMLElement)

  }


}