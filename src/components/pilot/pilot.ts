import { Component } from '@angular/core';
import { PilotxPage } from '../../pages/pilotx/pilotx';
import { ProductsPilotPage } from '../../pages/products-pilot/products-pilot';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello PilotComponent Component');
  }
}
