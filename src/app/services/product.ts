import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient)

  carregarProdutos(){
    return this.http.get<ProductModel[]>('/data.json')
  }
}
