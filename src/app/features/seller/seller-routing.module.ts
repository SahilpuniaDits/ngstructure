import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{SellerDeshboardComponent} from './components/seller-deshboard/seller-deshboard.component'
const routes: Routes = [
  {path:'sellerdashboard',component:SellerDeshboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
