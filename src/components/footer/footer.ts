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
  public pageID : number;

  

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
    if (3 - this.pageID > 0){
    this.navCtrl.setRoot(FeedPage,{},{animate: true, direction: 'forward'});
    }
    else if (3 - this.pageID == 0){

    }
    else{ 
    this.navCtrl.setRoot(FeedPage,{},{animate: true, direction: 'back'});
    }
  }
  goToFormsPage() {
    if (2 - this.pageID > 0){
      this.navCtrl.setRoot(FormsPage,{},{animate: true, direction: 'forward'});
      }
      else if (2 - this.pageID == 0){
      
      }
      else{ 
      this.navCtrl.setRoot(FormsPage,{},{animate: true, direction: 'back'});
      }
  }
  goToHomePage() {
    if (1 - this.pageID > 0){
      }
      else if (1 - this.pageID == 0){
      
      }
      else{ 
      this.navCtrl.setRoot(HomePage,{},{animate: true, direction: 'back'});
      }
  }
  goToMessagesPage(){
    if (5 - this.pageID > 0){
      this.navCtrl.setRoot(MessagesPage,{},{animate: true, direction: 'forward'});
      }
      else if (5 - this.pageID == 0){
      
      }
      else{ 
      this.navCtrl.setRoot(MessagesPage,{},{animate: true, direction: 'back'});
      }
  }   
  goToSupportPage(){
    if (4 - this.pageID > 0){
      this.navCtrl.setRoot(SupportPage,{},{animate: true, direction: 'forward'});
      }
      else if (4 - this.pageID == 0){
      
      }
      else{ 
      this.navCtrl.setRoot(SupportPage,{},{animate: true, direction: 'back'});
      }
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
        this.pageID = 1;
        break;
      case 'productspilot':
        this.product_path = '../../assets/icon/Icons/Bottom-row/products-dark.png';
        this.pageID = 1;
        break;
      case 'forms':
        this.forms_path = '../../assets/icon/Icons/Bottom-row/forms-dark.png';
        this.pageID = 2;
        break;
      case 'feed':
        this.home_path = '../../assets/icon/Icons/Bottom-row/home-dark.png';
        this.pageID = 3;
        break;
      case 'support':
        this.support_path = '../../assets/icon/Icons/Bottom-row/support-dark.png';
        this.pageID = 4;
        break;
      case 'messages':
        this.messages_path = '../../assets/icon/Icons/Bottom-row/messages-dark.png';
        this.pageID = 5;
        break;
    }
    console.log(this.pageID);
  }
}
