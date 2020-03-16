import { query, group, style, animate, trigger, transition } from '@angular/animations';

export const slideLeft = [
  query(':enter, :leave', style({ position: 'absolute', width: '100%', height: '100%' }), { optional: true }),
  group([
    query(
      ':enter',
      [style({ transform: 'translateX(-200%)' }), animate('.3s ease-in', style({ transform: 'translateX(0%)' }))],
      {
        optional: true
      }
    ),
    query(
      ':leave',
      [style({ transform: 'translateX(0%)' }), animate('.3s ease-in', style({ transform: 'translateX(200%)' }))],
      {
        optional: true
      }
    )
  ])
];

export const slideRight = [
  query(':enter, :leave', style({ position: 'absolute', width: '100%', height: '100%' }), { optional: true }),
  group([
    query(
      ':enter',
      [style({ transform: 'translateX(200%)' }), animate('.3s ease-in', style({ transform: 'translateX(0%)' }))],
      {
        optional: true
      }
    ),
    query(
      ':leave',
      [style({ transform: 'translateX(0%)' }), animate('.3s ease-in', style({ transform: 'translateX(-200%)' }))],
      {
        optional: true
      }
    )
  ])
];

export const routerTransition = [
  trigger('routerTransition', [transition(':increment', slideRight), transition(':decrement', slideLeft)])
];

export const fade = [
  trigger('routerTransition', [
    transition('* <=> *', [
      query(':enter, :leave', style({ position: 'absolute', width: '100%', opacity: 1 })),
      group([
        query(':enter', [style({ opacity: 0 }), animate('200ms ease-in-out', style({ opacity: 1 }))], {
          optional: true
        }),
        query(':leave', [style({ opacity: 1 }), animate('100ms ease-in-out', style({ opacity: 0 }))], {
          optional: true
        })
      ])
    ])
  ])
];
