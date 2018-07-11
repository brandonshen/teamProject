import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  public listOfMessages : Array<number> = new Array(80);
  public page: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = new Array<string>();
    this.page.push('messages');  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }
  goToMessagesPage(){
    this.navCtrl.setRoot(MessagesPage,{},{animate: true, direction: 'forward'});
  }
  goToNotificationsPage(){
    this.navCtrl.setRoot(NotificationsPage,{},{animate: true, direction: 'forward'});
  }
}
