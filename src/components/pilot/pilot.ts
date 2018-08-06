import { Component } from '@angular/core';
import { PilotxPage } from '../../pages/pilotx/pilotx';
import { ProductsPilotPage } from '../../pages/products-pilot/products-pilot';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
