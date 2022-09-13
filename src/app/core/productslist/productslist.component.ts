import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss']
})
export class ProductslistComponent implements OnInit {
  products:any = []

  constructor( private service:ProductsService) { }

  ngOnInit(): void {
  this.service.getproducts().subscribe((res:any)=>{
    this.products = res?.productList
    console.log(this.products)
  })
}
}