import { Component } from '@angular/core';
import { ImageService } from 'src/app/image.service';
import { Image } from 'src/app/model/image';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent {

  imagesTrending: Image[]
  delta: number
  arrIndex: Array<number> = [0,1,2,3,4,5,6,7,8]

  constructor(private _imageservice: ImageService){}

  ngOnInit(): void {
    this._imageservice.getImages().subscribe({
      next: (data) => {
        this.imagesTrending = data
      }
    })
  }
  onMouseDown($event: MouseEvent): void {
    $event.preventDefault()
    document.querySelector('.container')?.setAttribute('coordX', $event.clientX.toString())
  }
  onMouseUp($event: MouseEvent): void {
    const containerCard = document.querySelector('.container-card') as HTMLElement
    this.delta = this.getDirection($event)
    if(this.delta !== 0) this.moveItem(containerCard)
  }

  getDirection(evt: MouseEvent){
    let container = document.querySelector('.container') as HTMLElement

    let initialCoordX = parseInt(container.getAttribute('coordX') as string, 10)
    let lastCoordX = evt.clientX

    return  lastCoordX - initialCoordX
  }

  moveItem(element: HTMLElement){
    let nbOfImage = this.imagesTrending.length

    element.style.transition = 'transform 0.5s ease'
    if(this.delta > 0)  element.style.transform = `translateX(${100/nbOfImage}%)`
    if(this.delta < 0)  element.style.transform = `translateX(${-100/nbOfImage}%)`

    this.updateArray();
    this.opacityItem()
  }
  //----------------------------------------------------
  opacityItem(){
    let element = document.querySelector('.container-card') as HTMLElement
    for(let card of element.children){
      let index = parseInt(card.getAttribute('index') as string, 10);
      let cardItem = (card as HTMLElement)
      cardItem.style.opacity = '0';
      if(this.arrIndex[4] === index) {
        cardItem.style.opacity = '1';
        cardItem.style.transform = 'scale(1.2)';
        cardItem.style.zIndex = '2';
        cardItem.style.boxShadow = '2px 2px 2px rgba(0,0,0,0.4)';
        cardItem.style.filter = 'blur(0px)';
      }
      if(this.arrIndex[3] === index || this.arrIndex[5] === index) {
        cardItem.style.opacity = '0.6';
        cardItem.style.transform = 'scale(1)';
        cardItem.style.zIndex = '1';
        cardItem.style.boxShadow = '2px 2px 2px rgba(0,0,0,0)';
        cardItem.style.filter = 'blur(1px)';

      }
      cardItem.style.transition = 'all 0.5s ease';

      }
  }
  updateArray(){
    if(this.delta < 0){
      this.arrIndex = this.arrIndex.map((item) => {
        if((item + 1) > 8) return 0
        return item + 1
      })
    }
    if(this.delta > 0){
      this.arrIndex = this.arrIndex.map((item) => {
        if((item - 1) < 0) return 8
        return item - 1
      })
    }
  }

  updateCarousel($event: Event){
    const containerCard = document.querySelector('.container-card') as HTMLElement
    if(containerCard == ($event.target as EventTarget)){
      let firstChild = containerCard.firstElementChild as HTMLElement
      let lastChild = containerCard.lastElementChild as HTMLElement

      if(this.delta < 0) containerCard.appendChild(firstChild)
      if(this.delta > 0) containerCard.insertBefore(lastChild, firstChild)

      containerCard.style.transition = 'none'
      containerCard.style.transform = 'translateX(0)'
    }

  }

}
