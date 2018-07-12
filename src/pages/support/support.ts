import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { FormsPage } from '../forms/forms';
import { HomePage } from '../home/home';
import { TicketPage } from '../ticket/ticket';


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
  public page: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = new Array<string>();
    this.page.push('support');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }

  goToTicketPage(){
     this.navCtrl.push(TicketPage,{},{animate: true, direction: 'back'});
    
  }
  goBack(){
    this.navCtrl.pop();
  }
}
