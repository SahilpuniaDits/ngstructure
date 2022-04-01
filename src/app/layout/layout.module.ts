import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './headers/main-header/main-header.component';
import { MainFooterComponent } from './footers/main-footer/main-footer.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    MainFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
