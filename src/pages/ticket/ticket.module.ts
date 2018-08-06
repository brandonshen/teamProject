import { NgModule } from '@angular/core';
import { IonicPageModule, IonicFormInput } from 'ionic-angular';
import { TicketPage } from './ticket';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TicketPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketPage),
    FormsModule
  ],
})
export class TicketPageModule {}
