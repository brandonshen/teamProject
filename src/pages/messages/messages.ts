import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';


@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  public menuIsVisible: boolean;
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
  toggleMenu() {
    if (this.menuIsVisible == false) {
      document.getElementById("mySidenav").style.width="75%";
      this.menuIsVisible = true;
      console.log("Menu toggle on");
    } else {
      document.getElementById("mySidenav").style.width="0px";
      this.menuIsVisible = false;
      console.log("Menu toggle off");
    }
  }
}
