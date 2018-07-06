import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PilotxPage } from '../pilotx/pilotx';
import { Pilot3Page } from '../pilot3/pilot3';
import { Pilot5Page } from '../pilot5/pilot5';

/**
 * Generated class for the ProductsPilotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products-pilot',
  templateUrl: 'products-pilot.html',
})
export class ProductsPilotPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPilotPage');
  }
  goToPilotxPage(){
    this.navCtrl.setRoot(PilotxPage);
  }
  goToPilot3Page(){
    this.navCtrl.setRoot(Pilot3Page);
  }
  goToPilot5Page(){
    this.navCtrl.setRoot(Pilot5Page);
  }
}
