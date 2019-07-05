import { transition, trigger, query, stagger, animate, style, group } from '@angular/animations';


export const listFadeAnimation = [
  trigger('listFadeAnimation', [
    transition('* <=> *', [
      query(':leave', [
        stagger(200, [
          animate('500ms', style({opacity: 0}))
        ])
      ],
      {
        optional: true
      }),
      query(':enter', [
        style({opacity: 0}),
        stagger(200, [
          animate('500ms', style({opacity: 1}))
        ])
      ],
      {
        optional: true
      })
    ])
  ])
];
