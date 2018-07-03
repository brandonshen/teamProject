import { Component } from '@angular/core';

/**
 * Generated class for the ScrollItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'scroll-item',
  templateUrl: 'scroll-item.html'
})
export class ScrollItemComponent {

  text: string;

  constructor() {
    console.log('Hello ScrollItemComponent Component');
    this.text = 'Hello World';
  }

}
