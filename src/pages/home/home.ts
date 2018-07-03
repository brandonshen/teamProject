import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { FormsPage } from '../forms/forms';
import { SupportPage } from '../support/support';
import { ProductsPilotPage } from '../products-pilot/products-pilot';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log("Home page instantiated");
  }
  
  goToProductsPilotPage(){
    this.navCtrl.setRoot(ProductsPilotPage);
  }
  }
 

