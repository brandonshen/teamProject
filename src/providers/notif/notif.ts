
import { Injectable } from '@angular/core';

/*
  Generated class for the NotifProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotifProvider {
  public notifList : any;

  constructor() {
    console.log('Hello NotifProvider Provider');
    this.getNotifFromServer();
  }

  getNotifFromServer() : any {
    var jsonData = `[
      {
        "Type" : "Support",
        "Action" : "commented on your weight"
      },
      {
        "Type" : "Lil Pump",
        "Action" : "has gotten the victory royale"
      },
      {
        "Type" : "Aaron Nguyen",
        "Action" : "has joined the discord"
      }
    ]`;

    this.notifList = JSON.parse(jsonData);
    console.dir(this.notifList);
  }

    getNotifsList() {
      return this.notifList;
  }
}
