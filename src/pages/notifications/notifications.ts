import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';
/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  public menuIsVisible: boolean;
  public listOfNotifs : Array<number> = new Array(80);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
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
