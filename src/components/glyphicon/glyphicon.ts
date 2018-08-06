import { Component } from '@angular/core';



@Component({
  selector: 'glyphicon',
  templateUrl: 'glyphicon.html'
})
export class GlyphiconComponent {

  glyphicon = 0;

    onClick(glyphiconValue){
      this.glyphicon = glyphiconValue;
    }

}
