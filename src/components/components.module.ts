import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { RedComponent } from './red/red';
import { HeaderComponent } from './header/header';
import { ScrollItemComponent } from './scroll-item/scroll-item';
import { PilotComponent } from './pilot/pilot';
import { FormComponent } from './form/form';
@NgModule({
	declarations: [FooterComponent,
    RedComponent,
    HeaderComponent,
    ScrollItemComponent,
    PilotComponent,
    FormComponent],
	imports: [],
	exports: [FooterComponent,
    RedComponent,
    HeaderComponent,
    ScrollItemComponent,
    PilotComponent,
    FormComponent]
})
export class ComponentsModule {}
