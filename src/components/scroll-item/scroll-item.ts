import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageshistoryPage } from '../../pages/messageshistory/messageshistory'

/**
 * Generated class for the ScrollItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'scroll-item',
  templateUrl: 'scroll-item.html'
})
export class ScrollItemComponent {
  @Input() supportTitle : string;
  @Input() supportBody : string;
  @Input() supportTitle2 : string;
  @Input() embeddedIn : string;
  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello ScrollItemComponent Component');
    this.text = 'Hello World';
  }

  goToMessageHistory() {
    if (this.embeddedIn === 'messages')
      this.navCtrl.setRoot(MessageshistoryPage,{},{animate: true, direction: 'forward'});
    else if (this.embeddedIn === 'notifications')
      console.log("triggered in notifications");  
  }

}
