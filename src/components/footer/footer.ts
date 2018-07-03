import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from '../../pages/feed/feed';
import { FormsPage } from '../../pages/forms/forms';
import { HomePage } from '../../pages/home/home';
import { MessagesPage } from '../../pages/messages/messages';



/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer',
  templateUrl: 'footer.html',
})
export class FooterComponent {

  text: string;
  
  constructor(public navCtrl: NavController) {
    console.log('Hello FooterComponent Component');
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
  goToMessagesPage(){
    this.navCtrl.setRoot(MessagesPage);
  }

}
