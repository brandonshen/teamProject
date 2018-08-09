import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-pilotx',
  templateUrl: 'pilotx.html',
})
export class PilotxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PilotxPage');
  }

  reachstart(){
    console.log("yay things worked at the start");
  }
  reachend(){
    console.log("yay things worked at the end");
  }
}
