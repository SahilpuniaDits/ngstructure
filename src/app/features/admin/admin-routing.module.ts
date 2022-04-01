import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeshboardComponent} from './components/deshboard/deshboard.component';
import {BuyerDetailsComponent} from './components/buyer-details/buyer-details.component';
import {SellerDetailsComponent} from './components/seller-details/seller-details.component';
// import {} from './components/b'
const routes: Routes = [
  {
    path: 'deshbord',component:DeshboardComponent,
    children:[
    
    {path:'buyer',component:BuyerDetailsComponent},
    {path:'seller',component:SellerDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
