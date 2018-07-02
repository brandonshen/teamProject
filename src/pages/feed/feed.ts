import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormsPage } from '../forms/forms';
import { HomePage } from '../home/home';
import { SupportPage } from '../support/support';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  goToFormsPage(){
    this.navCtrl.setRoot(FormsPage);
  }

  goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  GoToFeedPage(){
    this.navCtrl.setRoot(HomePage);
  }

  GoToSupportPage(){
    this.navCtrl.setRoot(SupportPage);
  }
}
