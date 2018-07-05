import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { RedComponent } from './red/red';
import { HeaderComponent } from './header/header';
import { PilotComponent } from './pilot/pilot';
@NgModule({
	declarations: [FooterComponent,
    RedComponent,
    HeaderComponent,
    PilotComponent],
	imports: [],
	exports: [FooterComponent,
    RedComponent,
    HeaderComponent,
    PilotComponent]
})
export class ComponentsModule {}
