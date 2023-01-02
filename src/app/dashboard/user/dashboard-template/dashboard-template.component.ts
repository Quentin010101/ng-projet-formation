import { animate, query, state, style, transition, trigger, group } from '@angular/animations';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard-template',
  templateUrl: './dashboard-template.component.html',
  styleUrls: ['./dashboard-template.component.scss'],
   animations: [
    trigger('animationRoute', [
      transition('* <=> *', [
      style({height:'!'}),
       query(':enter, :leave', 
        [style({position: 'absolute' , inset: 0})], { optional: true }
       ),
       query(':enter', 
        [style({transform: 'translateX(100vw)', opacity: 0})], { optional: true }
       ),
       group([
         query(':leave', [animate('0.2s ease', style({transform: 'translateX(-100vw)' , opacity: 0},))], { optional: true }),
        query(':enter', [animate('0.2s ease', style({transform: 'translateX(0%)' , opacity: 1},))], { optional: true }),
       ])

      ])
    ])
   ]

})
export class DashboardTemplateComponent implements OnInit{

  ngOnInit(){

  }
  prepare(outlet: RouterOutlet){
    return outlet.activatedRouteData
  }

}
