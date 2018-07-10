import { Component, Input } from '@angular/core';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  public menuIsVisible: boolean;
  @Input() headerTitle : string;

  constructor() {
    console.log('Hello HeaderComponent Component'); 
    this.menuIsVisible = false;
    // document.getElementById("mySidenav").style.width="0px";
  }

  // openNav() {
  //   document.getElementById("mySidenav").style.width= "250px";
  // }

  // closeNav() {
  //   document.getElementById("mySidenav").style.width= "0px";
  // }

  toggleMenu() {
    if (this.menuIsVisible == false) {
      document.getElementById("mySidenav").style.width="250px";
      this.menuIsVisible = true;
      console.log("Menu toggle on");
    } else {
      document.getElementById("mySidenav").style.width="0px";
      this.menuIsVisible = false;
      console.log("Menu toggle off");
    }
  }
}
