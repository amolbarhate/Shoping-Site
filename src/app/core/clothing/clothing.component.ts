import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {
  products:any
  filterdata:any
  constructor( private service:ProductsService) { }

  ngOnInit(): void {
     this.service.getproducts().subscribe((res:any)=>{
    this.products = (res?.productList)
  })
  }

}
