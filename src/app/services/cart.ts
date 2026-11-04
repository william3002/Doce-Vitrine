import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartModel } from '../models/cart-model';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<CartModel[]>([])
  
  addProducts(product: ProductModel){
    
  }

}
