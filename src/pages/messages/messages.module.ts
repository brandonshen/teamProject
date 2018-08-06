import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesPage } from './messages';
import { ComponentsModule } from '../../components/components.module';
import { NotificationsPage } from '../notifications/notifications';
import { MessageProvider } from '../../providers/message/message';

@NgModule({
  declarations: [
    MessagesPage,
    NotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesPage),
    ComponentsModule,
  ],
  providers: [
    MessageProvider
  ]
})
export class MessagesPageModule {}
