import { Component } from '@angular/core'
import { appAnimations } from './home.animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: appAnimations
})
export class HomeComponent {
  secondBtnName = 'Shrink'
  state = 'normal'
  wildState = 'normal'
  list = ['Milk', 'Sugar', 'Bread']

  onAdd (item) {
    this.list.push(item)
  }

  onDelete (item) {
    this.list.splice(this.list.indexOf(item), 1)
  }

  onAnimate () {
    this.state === 'normal'
      ? this.state = 'highlighted'
      : this.state = 'normal'
    this.wildState === 'normal'
      ? this.wildState = 'highlighted'
      : this.wildState = 'normal'
    this.secondBtnName = 'Shrink'
  }

  onShrink () {
    if (this.wildState !== 'shrinked') {
      this.wildState = 'shrinked'
      this.secondBtnName = 'Unshrink'
    } else {
      this.wildState = 'normal'
      this.secondBtnName = 'Shrink'
    }
  }

  animationStart (event) {
    console.log(event)
  }

  animationDone (event) {
    console.log(event)
  }
}
