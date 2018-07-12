import { Component, Output, Input } from '@angular/core';
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
  @Input() currentPage : string[];

  public product_path : string;
  public forms_path : string;
  public home_path : string;
  public support_path : string;
  public messages_path : string;

  text: string;
  
  constructor(public navCtrl: NavController) {
    console.log('Hello FooterComponent Component');
    this.product_path = '../../assets/icon/Icons/Bottom-row/products.png';
    this.forms_path = '../../assets/icon/Icons/Bottom-row/forms.png';
    this.home_path = '../../assets/icon/Icons/Bottom-row/home.png';
    this.support_path = '../../assets/icon/Icons/Bottom-row/support.png';
    this.messages_path = '../../assets/icon/Icons/Bottom-row/messages.png';
  }

  ngOnChanges(changes: any) {
    console.log(changes.currentPage.currentValue);
    this.updateSelection();
  }

  goToFeedPage(){
    // this.navCtrl.push(FeedPage,{},{animate: true, direction: 'forward'});
    this.navCtrl.setRoot(FeedPage,{},{animate: true, direction: 'forward'});
  }
  goToFormsPage() {
    this.navCtrl.setRoot(FormsPage,{},{animate: true, direction: 'forward'});
  }
  goToHomePage() {
    this.navCtrl.setRoot(HomePage,{},{animate: true, direction: 'forward'});
  }
  goToMessagesPage(){
    this.navCtrl.setRoot(MessagesPage,{},{animate: true, direction: 'forward'});
  }   
  goToSupportPage(){
    this.navCtrl.setRoot(SupportPage,{},{animate: true, direction: 'forward'});
  }

  updateSelection() {

    this.product_path = '../../assets/icon/Icons/Bottom-row/products.png';
    this.forms_path = '../../assets/icon/Icons/Bottom-row/forms.png';
    this.home_path = '../../assets/icon/Icons/Bottom-row/home.png';
    this.support_path = '../../assets/icon/Icons/Bottom-row/support.png';
    this.messages_path = '../../assets/icon/Icons/Bottom-row/messages.png';

    switch(this.currentPage[0]) {
      case 'products':
        this.product_path = '../../assets/icon/Icons/Bottom-row/products-dark.png';
        break;
      case 'forms':
        this.forms_path = '../../assets/icon/Icons/Bottom-row/forms-dark.png';
        break;
      case 'feed':
        this.home_path = '../../assets/icon/Icons/Bottom-row/home-dark.png';
        break;
      case 'support':
        this.support_path = '../../assets/icon/Icons/Bottom-row/support-dark.png';
        break;
      case 'messages':
        this.messages_path = '../../assets/icon/Icons/Bottom-row/messages-dark.png';
        break;
    }
  }
}
