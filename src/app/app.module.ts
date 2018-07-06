import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedPage,
    FormsPage,
    MessagesPage,
    SupportPage,
    ProductsPilotPage,
    TicketPage
    PilotxPage,
    Pilot3Page,
    Pilot5Page
    Pilot5Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule  
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
    TicketPage
    PilotxPage,
    Pilot3Page,
    Pilot5Page
    Pilot5Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
