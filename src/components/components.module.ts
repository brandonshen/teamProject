import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { RedComponent } from './red/red';
import { HeaderComponent } from './header/header';
import { ScrollItemComponent } from './scroll-item/scroll-item';
import { PilotComponent } from './pilot/pilot';
@NgModule({
	declarations: [FooterComponent,
    RedComponent,
    HeaderComponent,
    ScrollItemComponent,
    PilotComponent],
	imports: [],
	exports: [FooterComponent,
    RedComponent,
    HeaderComponent,
    PilotComponent]
})
export class ComponentsModule {}
