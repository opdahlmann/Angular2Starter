import {style, animate, transition, state, trigger} from '@angular/core';

export default [
  trigger('flyInOut', [
    state('in', style({opacity: 1, transform: 'translateX(0)'})),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(3%)'
      }),
      animate('0.4s ease-in')
    ]),
    transition('* => void', [
      animate('1.2s 10 ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))
    ])
  ])
];