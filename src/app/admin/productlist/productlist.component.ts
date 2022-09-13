import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  products:any = []

  constructor( private service:ProductsService) { }

  ngOnInit(): void {
  this.service.getproducts().subscribe((res:any)=>{
    this.products = res?.productList
    console.log(this.products)
  })
}
}