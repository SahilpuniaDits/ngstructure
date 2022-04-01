import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuyerDeshboardComponent} from './components/buyer-deshboard/buyer-deshboard.component';
const routes: Routes = [
  {path:'buyerdashboard',component:BuyerDeshboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
