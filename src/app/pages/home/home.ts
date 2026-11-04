import { Component, inject, signal } from '@angular/core';
import { Product } from '../../services/product';
import { ProductModel } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private productService = inject(Product);

  produtos = signal<ProductModel[]>([]);

  constructor() {
    this.productService.carregarProdutos().subscribe({
      next: (dados) => {
        this.produtos.set(dados);
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos: ', erro);
      },
    });
  }
}
