import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PilotxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pilotx',
  templateUrl: 'pilotx.html',
})
export class PilotxPage {
  public page: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = new Array<string>();
    this.page.push('products');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PilotxPage');
  }
}