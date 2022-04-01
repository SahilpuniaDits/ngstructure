import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerDeshboardComponent } from './components/buyer-deshboard/buyer-deshboard.component';


@NgModule({
  declarations: [
    BuyerDeshboardComponent
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule
  ],
  exports:[
    BuyerDeshboardComponent
  ]
})
export class BuyerModule {
  constructor(){
    console.log("buy")
  }
 }
