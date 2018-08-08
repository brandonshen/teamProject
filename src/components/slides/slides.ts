import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

class MyPage{
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('BOONK GANG', currentIndex);
  }
}

@Component({
  selector: 'slides',
  templateUrl: 'slides.html'
})
export class SlidesComponent {

  text: string;

  constructor() {
    console.log('Hello SlidesComponent Component');
    this.text = 'Hello World';
  }

}
