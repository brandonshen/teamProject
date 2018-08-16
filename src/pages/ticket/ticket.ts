import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SupportPage } from '../support/support';
import { AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ElementRef, Directive} from '@angular/core';

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {
  private ticket : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private formBuilder: FormBuilder, public element:ElementRef) {
    this.ticket = this.formBuilder.group({
      subject: ['', Validators.required],
      description : ['', Validators.required],
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }
  goBack(){
    this.navCtrl.setRoot(SupportPage,{},{animate: true, direction: 'back'});
  }
  sendTicket(){
      console.log(this.ticket.value);
      let alert = this.alertCtrl.create({
        title: 'Ticket Submitted',
        subTitle: 'Your ticket has now been submitted.',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }
    



