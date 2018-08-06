import { Component } from '@angular/core';
import { PilotxPage } from '../../pages/pilotx/pilotx';
import { ProductsPilotPage } from '../../pages/products-pilot/products-pilot';
import { NavController, NavParams } from 'ionic-angular';

<<<<<<< HEAD
=======
/**
 * Generated class for the PilotComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
>>>>>>> 31eeafd190eb668a48dc85c4bb47a69b147ba5e8
@Component({
  selector: 'pilot',
  templateUrl: 'pilot.html'
})
export class PilotComponent {

  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello PilotComponent Component');
  }
  goBack(){
    this.navCtrl.setRoot(ProductsPilotPage,{},{animate: true, direction: 'back'});
  }
}
