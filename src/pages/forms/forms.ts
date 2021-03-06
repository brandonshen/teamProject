import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { HomePage } from '../home/home';
import { SupportPage } from '../support/support';

/**
 * Generated class for the FormsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html',
})
export class FormsPage {
  public page: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = new Array<string>();
    this.page.push('forms');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FormsPage');
  }

}
