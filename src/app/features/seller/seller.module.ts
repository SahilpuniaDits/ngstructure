import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerDeshboardComponent } from './components/seller-deshboard/seller-deshboard.component';
import { UsdinrPipe } from './pipes/usdinr.pipe';


@NgModule({
  declarations: [
    SellerDeshboardComponent,
    UsdinrPipe
  ],
  imports: [
    CommonModule,
    SellerRoutingModule
  ],
  exports:[
    UsdinrPipe
  ]
})
export class SellerModule { 
  constructor(){
    console.log("seller")
  }
}
