import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { RedComponent } from './red/red';
import { ScrollComponent } from './scroll/scroll';
@NgModule({
	declarations: [FooterComponent,
    RedComponent,
    ScrollComponent],
	imports: [],
	exports: [FooterComponent,
    RedComponent,
    ScrollComponent]
})
export class ComponentsModule {}
