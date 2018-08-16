import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';
import { NotifProvider } from '../../providers/notif/notif';
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
  public listOfNotifs : Array<number> = new Array(5);
  public listOfNotifs1 : any;
  public page : string[];
  notifications: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public notifProvider: NotifProvider) {
    this.page = new Array<string>();
    this.page.push('notifications');
    this.listOfNotifs1 = this.notifProvider.getNotifsList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }
  goToMessagesPage(){
    this.navCtrl.setRoot(MessagesPage,{},{animate: true, direction: 'back'});
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
