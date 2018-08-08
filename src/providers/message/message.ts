
import { Injectable } from '@angular/core';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {
  public conversationList : any;

  constructor() {
    console.log('Hello MessageProvider Provider');
    this.getMessageFromServer();
  }

  getMessageFromServer() : any {
    var jsonData = `[
      {
        "Name" : "Young Thug", 
        "LastMessage" : "SS3",
        "Timestamp" : 1533269625
      },
      {
        "Name" : "Travis Scott",
        "LastMessage" : "ASTROWORLD",
        "Timestamp" : 1533284025
      },
      {
        "Name" : "Jeffery",
        "LastMessage" : "string",
        "Timestamp" : 1533291225
      },
      {
        "Name" : "Juice WRLD",
        "LastMessage" : "string",
        "Timestamp" : 1533306645
      },
      {
        "Name" : "Kanye",
        "LastMessage" : "string",
        "Timestamp" : 1533317685
      },
      {
        "Name" : "Donald Trump",
        "LastMessage" : "string",
        "Timestamp" : 1533332085
      },
      {
        "Name" : "Kim Jong Un",
        "LastMessage" : "string",
        "Timestamp" : 1533334845
      },
      {
        "Name" : "Chris Hamilton",
        "LastMessage" : "string",
        "Timestamp" : 1533338445
      }
    ]`;  

    this.conversationList = JSON.parse(jsonData);
    console.dir(this.conversationList);
  }

  getMessagesList() {
    return this.conversationList;
  }

  

}
