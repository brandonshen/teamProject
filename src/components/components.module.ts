import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { RedComponent } from './red/red';
import { HeaderComponent } from './header/header';
import { ScrollItemComponent } from './scroll-item/scroll-item';
@NgModule({
	declarations: [FooterComponent,
    RedComponent,
    HeaderComponent,
    ScrollItemComponent],
	imports: [],
	exports: [FooterComponent,
    RedComponent,
    HeaderComponent,
    ScrollItemComponent]
})
export class ComponentsModule {}
