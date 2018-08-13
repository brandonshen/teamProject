import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  templateUrl: 'app.html',
  selector: 'app-root',
  // styleUrls: ['./app.component.css']
})
export class MyApp {
  rootPage:any = HomePage;
  title = 'app';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private afStorage: AngularFireStorage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

