import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { FormsPage } from '../forms/forms';
import { HomePage } from '../home/home';

/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }

  goToFeedPage(){
    this.navCtrl.setRoot(FeedPage);

  }
  goToFormsPage(){
    this.navCtrl.setRoot(FormsPage);
  }

  goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  goToSupportPage(){
    this.navCtrl.setRoot(SupportPage);
  }
}
