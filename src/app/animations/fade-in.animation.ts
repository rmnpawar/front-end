import {style, transition, trigger, animate, query} from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition('* <=> *', [
    style({opacity: 0}),
    animate('0.3s', style({opacity: 1})),
  ])
]);

export const fadeIn = trigger('routeAnimations', [
  transition('* <=> *', [
    // Set a default  style for enter and leave
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: 'initial',
        opacity: 0,
        top: '-10%',
        // transform: 'scale(0) translateY(100%)',
      }),
    ], {optional: true}),
    // Animate the new page in
    query(':enter', [
      animate('600ms ease', style({
        opacity: 1,
        top: '0%',
        // transform: 'scale(1) translateY(0)'
       })),
    ], {optional: true})
  ]),
]);
