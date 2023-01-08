import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/image.service';
import { Image } from 'src/app/model/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  imagesTrending: Image[]

  constructor(private _imageservice: ImageService){}

  ngOnInit(): void {
    this._imageservice.getImages().subscribe({
      next: data => this.imagesTrending = data
    })
  }
}
