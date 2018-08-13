import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { FormsPage } from '../pages/forms/forms';
import { ComponentsModule } from '../components/components.module';
import { ProductsPilotPage } from '../pages/products-pilot/products-pilot';
import { TicketPage } from '../pages/ticket/ticket';
import { PilotxPage } from '../pages/pilotx/pilotx';
import { Pilot3Page } from '../pages/pilot3/pilot3';
import { Pilot5Page } from '../pages/pilot5/pilot5';
import { MessagesPage } from '../pages/messages/messages';
import { SupportPage } from '../pages/support/support';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MessageProvider } from '../providers/message/message';
import { TicketPageModule } from '../pages/ticket/ticket.module';
import { FormsModule } from '@angular/forms';
import { NotifProvider } from '../providers/notif/notif';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedPage,
    FormsPage,
    MessagesPage,
    SupportPage,
    ProductsPilotPage,
    TicketPage,
    PilotxPage,
    Pilot3Page,
    Pilot5Page,
    NotificationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAgBEqp6VQnBDK5hZ-IBAsjRQKcQJvcSdw",
      authDomain: "hovercam-n1g3r.firebaseapp.com",
      storageBucket: "hovercam-n1g3r.appspot.com",
      projectId: "hovercam-n1g3r",
    }),
    AngularFireStorageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedPage,
    FormsPage,
    MessagesPage,
    SupportPage,
    ProductsPilotPage,
    TicketPage,
    PilotxPage,
    Pilot3Page,
    Pilot5Page,
    NotificationsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessageProvider,
    NotifProvider
  ]
})
export class AppModule {}
