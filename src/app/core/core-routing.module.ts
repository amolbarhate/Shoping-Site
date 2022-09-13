import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from '../admin/productlist/productlist.component';
import { ClothingComponent } from './clothing/clothing.component';
import { LoginComponent } from './login/login.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ShowproducsComponent } from './showproducs/showproducs.component';

const routes: Routes = [
  { path: '', component:ShowproducsComponent},
  { path: 'login', component:LoginComponent},
  { path: 'clothing', component:ClothingComponent},
  { path: 'list', component:ProductslistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
