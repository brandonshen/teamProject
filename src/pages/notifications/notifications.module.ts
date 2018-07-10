import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsPage } from './notifications';
import { MessagesPage } from '../messages/messages';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    NotificationsPage,
    MessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsPage),
    ComponentsModule,
  ],
})
export class NotificationsPageModule {}
