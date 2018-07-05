import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupportPage } from './support';
import { TicketPage } from '../ticket/ticket';

@NgModule({
  declarations: [
    SupportPage,
    TicketPage
  ],
  imports: [
    IonicPageModule.forChild(SupportPage),
  ],
})
export class SupportPageModule {}
