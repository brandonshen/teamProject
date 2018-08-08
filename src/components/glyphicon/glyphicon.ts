import { Component, Input } from '@angular/core';



@Component({
  selector: 'glyphicon',
  templateUrl: 'glyphicon.html',
  styles:[`
  .glyphicon-star{
    color: orange;
  }
    `
  ]
})
export class GlyphiconComponent {
  
  @Input('glyphicon-value')rating = 0;
  @Input()numOfReviews = 0;

  onClick(glyphiconValue){
    this.rating = glyphiconValue;
  }
}
