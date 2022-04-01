import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './features/admin/admin.module';
import { DeshboardComponent } from './features/admin/components/deshboard/deshboard.component';
import { BuyerModule } from './features/buyer/buyer.module';
// import { AdminModule } from './features/admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BuyerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
