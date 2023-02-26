import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Image } from 'src/app/model/image';
import { UserDto } from 'src/app/model/userDto';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit{
  @Input() user: UserDto
  @Input() userImages: Image[]
  count: number = 0

  ngOnInit(){

  }
  countLike(){
    this.count = 0
    this.userImages.forEach((el) => {
      this.count += el.like.length
    })
    return this.count
  }

}
