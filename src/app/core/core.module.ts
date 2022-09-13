import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowproducsComponent } from './showproducs/showproducs.component';
import { ClothingComponent } from './clothing/clothing.component';
import { AdminModule } from '../admin/admin.module';
import { ProductslistComponent } from './productslist/productslist.component';





@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    ShowproducsComponent,
    ClothingComponent,
    ProductslistComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AdminModule
  ],
  exports:[ LoginComponent,
    NavbarComponent,
    ShowproducsComponent,
    ClothingComponent,
    ProductslistComponent
  ]
})
export class CoreModule { }
