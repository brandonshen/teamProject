import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PilotxPage } from '../pilotx/pilotx';
import { Pilot3Page } from '../pilot3/pilot3';
import { Pilot5Page } from '../pilot5/pilot5';
import { HomePage } from '../home/home';

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
  public page: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = new Array<string>();
    this.page.push('productspilot');
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
  goBack(){
    this.navCtrl.setRoot(HomePage,{},{animate: true, direction: 'back'});
  }
}
