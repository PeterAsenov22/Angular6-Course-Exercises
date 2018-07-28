import {
  trigger,
  state,
  animate,
  transition,
  style,
  keyframes,
  group
 } from '@angular/animations'

const appAnimations =  [
  trigger('divState', [
    state('normal', style({
      backgroundColor: 'red',
      transform: 'translateX(0)'
    })),
    state('highlighted', style({
      backgroundColor: 'blue',
      transform: 'translateX(100px)'
    })),
    transition('normal<=>highlighted', animate(1000))
  ]),
  trigger('wild', [
    state('normal', style({
      backgroundColor: 'red',
      transform: 'translateX(0) scale(1)'
    })),
    state('highlighted', style({
      backgroundColor: 'blue',
      transform: 'translateX(100px) scale(1)'
    })),
    state('shrinked', style({
      backgroundColor: 'green',
      transform: 'translateX(0) scale(0.5)'
    })),
    transition('normal=>highlighted', animate(1000)),
    transition('highlighted=>normal', animate(300)),
    transition('*<=>shrinked', [
      style({
        backgroundColor: 'orange'
      }),
      animate(1000, style({
        borderRadius: '50px'
      })),
      animate(500)
    ])
  ]),
  trigger('list1', [
    transition('void=>*', [
      style({
        opacity: 0,
        transform: 'translateX(-100px)'
      }),
      animate(500)
    ]),
    transition('*=>void', [
      animate(1500, style({
        transform: 'translateX(100px)',
        opacity: 0
      }))
    ])
  ]),
  trigger('list2', [
    transition('void=>*', [
      animate(1000, keyframes([
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        style({
          opacity: 0.5,
          transform: 'translateX(-50px)'
        }),
        style({
          opacity: 0.7,
          transform: 'translateX(-20px)'
        }),
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ]))
    ]),
    transition('*=>void', [
      group([
        animate(1000, style({
          backgroundColor: 'red'
        })),
        animate(1000, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ])
]

export { appAnimations }
