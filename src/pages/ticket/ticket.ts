import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { SupportPage } from '../support/support';
import { AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ElementRef, Directive} from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';

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
  loader: any;
  videoId: any;
  flag_upload = true;
  flag_play = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private formBuilder: FormBuilder, public element:ElementRef,private transfer:FileTransfer, private loadingCtrl: LoadingController, public toastCtrl: ToastController, private camera: Camera, private mediaCapture:MediaCapture) {
    this.ticket = this.formBuilder.group({
      subject: ['', Validators.required],
      description : ['', Validators.required],
    })
  }

  captureVideo(){
    let options:CaptureVideoOptions={limit:1}
    this.mediaCapture.captureVideo(options)
    .then((videodata: MediaFile[])=>{
      var i, path, len;
      for(i=0, len = videodata.length; i < len; i += 1){
        path = videodata[i].fullPath;
      }
      this.videoId=path;
      this.flag_play=false;
      this.flag_upload = false;
    });
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
      this.ticket.reset();
      const fileTransfer: FileTransferObject=this.transfer.create();
      let options1: FileUploadOptions = {
        fileKey: 'video_upload_file',
        fileName: this.videoId,
        headers: {},
        mimeType: "multipart/form-data",
        params: { },
        chunkedMode: false
        }
    }
  }
    



