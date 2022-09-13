import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseurl = 'assets/Products/products.json'
  constructor( private http:HttpClient) { }

  getproducts(){
   return this.http.get('assets/Products/products.json')
  }

}
