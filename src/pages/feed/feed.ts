import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { HomePage} from '../home/home';
=======
import { FormsPage } from '../forms/forms';
import { HomePage } from '../home/home';

>>>>>>> ec738427ba81b13b9326ae1838ecb1e4955c736c
/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToHomePage(){
    this.navCtrl.setRoot(HomePage);

  }

<<<<<<< HEAD

=======
  goToFormsPage(){
    this.navCtrl.setRoot(FormsPage);
  }

  goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }
>>>>>>> ec738427ba81b13b9326ae1838ecb1e4955c736c
}
