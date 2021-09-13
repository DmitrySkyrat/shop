import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/modules/ProductsModule/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  selectedProducts: ProductModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  trackByItems(index: number, selectedProduct: ProductModel) {
    return selectedProduct.size;
  }
}
