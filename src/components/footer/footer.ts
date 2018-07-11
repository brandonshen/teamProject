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

  text: string;
  
  constructor(public navCtrl: NavController) {
    console.log('Hello FooterComponent Component');
    
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
    console.log("The value of currentPage is: " + this.currentPage)
    this.navCtrl.setRoot(MessagesPage,{},{animate: true, direction: 'forward'});
  }   
  goToSupportPage(){
    this.navCtrl.setRoot(SupportPage,{},{animate: true, direction: 'forward'});
  }

  updateSelection() {
    (<HTMLImageElement>document.getElementById("img_products")).src = "../../assets/icon/Icons/Bottom-row/products.png";
    (<HTMLImageElement>document.getElementById("img_forms")).src = "../../assets/icon/Icons/Bottom-row/forms.png";
    (<HTMLImageElement>document.getElementById("img_home")).src = "../../assets/icon/Icons/Bottom-row/home.png";
    (<HTMLImageElement>document.getElementById("img_support")).src = "../../assets/icon/Icons/Bottom-row/support.png";
    (<HTMLImageElement>document.getElementById("img_messages")).src = "../../assets/icon/Icons/Bottom-row/messages.png";

    switch(this.currentPage[0]) {
      case 'products':
        (<HTMLImageElement>document.getElementById("img_products")).src = "../../assets/icon/Icons/Bottom-row/products-dark.png";
        break;
      case 'forms':
        (<HTMLImageElement>document.getElementById("img_forms")).src = "../../assets/icon/Icons/Bottom-row/forms-dark.png";
        break;
      case 'feed':
        (<HTMLImageElement>document.getElementById("img_home")).src = "../../assets/icon/Icons/Bottom-row/home-dark.png";
        break;
      case 'support':
        (<HTMLImageElement>document.getElementById("img_support")).src = "../../assets/icon/Icons/Bottom-row/support-dark.png";
        break;
      case 'messages':
        (<HTMLImageElement>document.getElementById("img_messages")).src = "../../assets/icon/Icons/Bottom-row/messages-dark.png";
        break;
    }
  }
}
