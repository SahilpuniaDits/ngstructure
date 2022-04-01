import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './features/admin/admin.module';

const routes: Routes = [
  {path:"admin",
  loadChildren:()=>import('./features/admin/admin.module').then(m =>m.AdminModule)},
  {path:"buyer",
     loadChildren:()=>import('./features/buyer/buyer.module').then(m =>m.BuyerModule)},
   {path:"seller",
      loadChildren:()=> import('./features/seller/seller.module').then(m=>m.SellerModule)}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
