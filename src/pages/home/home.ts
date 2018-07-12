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
  public title: string = "";
  public page: string[];

  constructor(public navCtrl: NavController) {
    console.log("Home page instantiated");
    this.title=" Products ";
    this.page = new Array<string>();
    this.page.push('products');
  }
  
  goToProductsPilotPage(){
    this.navCtrl.setRoot(ProductsPilotPage);
  }
  }
 

