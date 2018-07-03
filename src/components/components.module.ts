import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { RedComponent } from './red/red';
@NgModule({
	declarations: [FooterComponent,
    RedComponent],
	imports: [],
	exports: [FooterComponent,
    RedComponent]
})
export class ComponentsModule {}
