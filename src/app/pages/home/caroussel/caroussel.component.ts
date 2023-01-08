import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Image } from 'src/app/model/image';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],
  animations: [
    trigger('translate', [
      state('true', style({ left: '100%'})),
      state('false', style({ left: '0%'})),
      transition('true => false',
        animate('3000ms')
      )




    ])
  ]
})
export class CarousselComponent {
  @Input() imagesTrending: Image[]
  arrOpacity: Array<number> = [8,0,1]
  arr = [1,2,3,4]
  state: boolean = false

  onMouseDown($event: MouseEvent): void {
    $event.preventDefault()
    document.querySelector('.container')?.setAttribute('coordX', $event.clientX.toString())
  }
  onMouseUp($event: MouseEvent): void {

    let value = 0

    let container = document.querySelector('.container')
    let lastCoordX = parseInt(container?.getAttribute('coordX') as string, 10)
    let delta = 100*($event.clientX - lastCoordX)/window.innerWidth
    if(delta > 0){
      let lastItem = this.imagesTrending.pop()
      this.imagesTrending.unshift(lastItem as Image)
      value = -1
    }
    if(delta < 0){
      let lastItem = this.imagesTrending.shift()
      this.imagesTrending.push(lastItem as Image)
      value = 1
    }

    this.update(value)
  }

  update(value: number){

    let collection = document.querySelectorAll<HTMLElement>('.card')
    collection.forEach((element) => {
      element.style.transform = `translateX(${value*100}%)`
      setTimeout(() => {
        element.style.transform = `translateX(0%)`
        element.style.transition = `transform 0.3s ease`
      }, 100);
    })


  }






}
