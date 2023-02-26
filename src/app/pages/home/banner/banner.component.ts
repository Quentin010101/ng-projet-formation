import { Component, ElementRef } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  private observer: IntersectionObserver
  alreadyFire: boolean = false
  usersNumber: number = 0
  imagesNumber: number = 0
  categoryNumber: number = 0
  users: number
  images: number
  category: number

  constructor(private el : ElementRef, private _imageService: ImageService){}

  ngOnInit(){
    this._imageService.getHomePageCount().subscribe({
      next: (data) => {
        this.users = data.nbUsers
        this.category = data.nbCategories
        this.images = data.nbImages
      }
    })

  }

  ngAfterViewInit(){

    this.observer = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && !this.alreadyFire){
        this.alreadyFire = true
          this.incrementUsers()
          this.incrementImages()
          this.incrementCategories()

      }else{
      }
    }, {
      threshold: 0.75
    })

    this.observer.observe(this.el.nativeElement as HTMLElement)
  }

  incrementUsers(){
    const interval = setInterval(()=>{
      this.usersNumber ++
      if(this.usersNumber >= this.users){
        clearInterval(interval)
      }
    }, 100)
  }
  incrementImages(){
    const interval = setInterval(()=>{
      this.imagesNumber ++
      if(this.imagesNumber >= this.images){
        clearInterval(interval)
      }
    }, 100)
  }
  incrementCategories(){
    const interval = setInterval(()=>{
      this.categoryNumber ++
      if(this.categoryNumber >= this.category){
        clearInterval(interval)
      }
    }, 100)
  }

}
