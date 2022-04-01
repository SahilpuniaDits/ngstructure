import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DeshboardComponent } from './components/deshboard/deshboard.component';
import { SellerDetailsComponent } from './components/seller-details/seller-details.component';
import { BuyerDetailsComponent } from './components/buyer-details/buyer-details.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DeshboardComponent,
    SellerDetailsComponent,
    BuyerDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ],
  exports:[
    DeshboardComponent,
    SellerDetailsComponent,
    BuyerDetailsComponent
  ]
})
export class AdminModule {
  constructor(){
    console.log("admin")
  }
 }
