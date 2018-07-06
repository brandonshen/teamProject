import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupportPage } from './support';
import { ComponentsModule } from '../../components/components.module';
import { TicketPage } from '../ticket/ticket';

@NgModule({
  declarations: [
    SupportPage,
    TicketPage
  ],
  imports: [
    IonicPageModule.forChild(SupportPage),
    ComponentsModule,
  ],
})
export class SupportPageModule {}
