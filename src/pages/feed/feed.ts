import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormsPage } from '../forms/forms';
import { HomePage } from '../home/home';
import { SupportPage } from '../support/support';
import { AngularFireStorage } from 'angularfire2/storage';

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
  public page: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private afStorage: AngularFireStorage) {
    this.page = new Array<string>();
    this.page.push('feed');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
