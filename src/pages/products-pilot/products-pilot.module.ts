import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductsPilotPage } from './products-pilot';

@NgModule({
  declarations: [
    ProductsPilotPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductsPilotPage),
  ],
})
export class ProductsPilotPageModule {}
