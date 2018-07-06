import { Component } from '@angular/core';
import { PilotxPage } from '../../pages/pilotx/pilotx';

/**
 * Generated class for the PilotComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pilot',
  templateUrl: 'pilot.html'
})
export class PilotComponent {

  text: string;

  constructor() {
    console.log('Hello PilotComponent Component');
    this.text = 'Hello World';
  }
}
