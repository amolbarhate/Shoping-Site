import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { RouterModule } from '@angular/router';


console.log('admin module')
@NgModule({
  declarations: [
    ProductlistComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ProductlistComponent]
})
export class AdminModule { }
