import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';
import { MessageshistoryPage } from './messageshistory';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MessageshistoryPage,
    MessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageshistoryPage),
    ComponentsModule
  ],
})
export class MessageshistoryPageModule {}
