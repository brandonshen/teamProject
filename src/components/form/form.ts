import { Component } from '@angular/core';

/**
 * Generated class for the FormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form',
  templateUrl: 'form.html'
})
export class FormComponent {

  text: string;

  constructor() {
    console.log('Hello FormComponent Component');
    this.text = 'Hello World';
  }

}
export class TicketInfo {
  constructor(public subject: string, public description: string, public video?: File){
    
  }
}
