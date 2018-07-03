import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { RedComponent } from './red/red';
import { ScrollComponent } from './scroll/scroll';
import { ScrollnewComponent } from './scrollnew/scrollnew';
@NgModule({
	declarations: [FooterComponent,
    RedComponent,
    ScrollComponent,
    ScrollnewComponent],
	imports: [],
	exports: [FooterComponent,
    RedComponent,
    ScrollComponent,
    ScrollnewComponent]
})
export class ComponentsModule {}
