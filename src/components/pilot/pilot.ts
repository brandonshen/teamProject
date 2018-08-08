// import { Component } from '@angular/core';
// import { PilotxPage } from '../../pages/pilotx/pilotx';
// import { ProductsPilotPage } from '../../pages/products-pilot/products-pilot';
// import { NavController, NavParams } from 'ionic-angular';


// @Component({
//   selector: 'pilot',                                              <<<THIS WILL BE USED LATER DONT DELETE>>>
//   templateUrl: 'pilot.html'
// })
// export class PilotComponent {

//   text: string;

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     console.log('Hello PilotComponent Component');
//   }
//   goBack(){
//     this.navCtrl.setRoot(ProductsPilotPage,{},{animate: true, direction: 'back'});
//   }
// }

import { Component,Input } from '@angular/core';

@Component({
  selector:'pilot',
  template:`
  <div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src="{{data.imageUrl}}">
    </a>
  </div>
  <div class= "media-body">
    <div class= "media-body">
      <h4 class= "media-heading">
        {{data.productname}}
      </h4>
      {{data.releasedDate}}
      <gylphicon>
        [rating-value]= "data.rating"
        [numOfReviews]= "data.numOfReviews">
      </glpyhicon>
      <br>
      {{data.description}}
  </div>
</div>
</div>
  `,
  styles:[`
  .media{
   margin-bottom:20px;
  }
  `]
})

export class PilotComponent {
  @Input() data;
}