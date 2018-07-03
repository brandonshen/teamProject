import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { RedComponent } from './red/red';
import { HeaderComponent } from './header/header';
@NgModule({
	declarations: [FooterComponent,
    RedComponent,
    HeaderComponent],
	imports: [],
	exports: [FooterComponent,
    RedComponent,
    HeaderComponent]
})
export class ComponentsModule {}
