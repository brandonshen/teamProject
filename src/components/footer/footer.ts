import { Component, Output, Directive, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from '../../pages/feed/feed';
import { FormsPage } from '../../pages/forms/forms';
import { HomePage } from '../../pages/home/home';
import { SupportPage } from '../../pages/support/support';
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
  @Input()
  currentPage : string;
  text: string;
  
  constructor(public navCtrl: NavController) {
    console.log('Hello FooterComponent Component');
    console.log("The value of the currentPage is" + this.currentPage);
  }
  goToFeedPage(){
    // this.navCtrl.push(FeedPage,{},{animate: true, direction: 'forward'});
    this.navCtrl.setRoot(FeedPage,{},{animate: true, direction: 'forward'});
  }
  goToFormsPage(){
    this.navCtrl.setRoot(FormsPage,{},{animate: true, direction: 'forward'});
  }
  goToHomePage(){
    this.navCtrl.setRoot(HomePage,{},{animate: true, direction: 'forward'});
  }
  goToMessagesPage(){
    this.navCtrl.setRoot(MessagesPage,{},{animate: true, direction: 'forward'});
  }   
  goToSupportPage(){
    this.navCtrl.setRoot(SupportPage,{},{animate: true, direction: 'forward'});
  }

  updateSelection(){
    switch(this.currentPage){
      case 'products':
        break;
      case 'forms':
        break;
      case 'feed':
       break;
      case 'support':
       break;
    }
  }
}
