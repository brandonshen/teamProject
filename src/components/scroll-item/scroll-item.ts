import { Component, Input } from '@angular/core';

@Component({
  selector: 'scroll-item',
  templateUrl: 'scroll-item.html'
})
export class ScrollItemComponent {
  @Input() supportTitle : string;
  @Input() supportBody : string;
  
  text: string;

  constructor() {
    console.log('Hello ScrollItemComponent Component');
    this.text = 'Hello World';
  }

}
