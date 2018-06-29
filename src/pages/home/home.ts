import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { FormsPage } from '../forms/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToFeedPage(){
    this.navCtrl.setRoot(FeedPage);

  }

  goToFormsPage(){
    this.navCtrl.setRoot(FormsPage);
  }

}
