import { animate, query, state, style, transition, trigger } from '@angular/animations';

export const Animation = {
  animateTrigger:  trigger('router', [
    transition('* <=> *', [
      query(':enter, :leave',[
        style({
          opacity: 0,
        })
      ], { optional: true }),
      query(':enter',  [
        animate('3000ms ease-out', style({ opacity: 1 }))
      ], { optional: true }),
    ])
  ])

}