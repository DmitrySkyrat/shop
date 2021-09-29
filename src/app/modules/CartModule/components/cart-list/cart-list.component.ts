import { Component, OnInit } from '@angular/core';
import { CartProductModel } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  selectedProducts!: CartProductModel[];
  rezultProductsSum!: number;
  rezultProductsCount!: number;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.selectedProducts = this.cartService.getCartProducts;
    this.rezultProductsSum = this.cartService.getProductsSum();
    this.rezultProductsCount = this.cartService.getProductsCount();
  }

  trackByItems(index: number, selectedProduct: CartProductModel) {
    return selectedProduct.size;
  }

  order() {
    console.log('selectedProducts', this.selectedProducts);
  }

  onDelete(product: CartProductModel) {
    this.cartService.deleteCartProduct(product);
    this.selectedProducts = this.cartService.getCartProducts;
  }

  setCountToProduct(product: CartProductModel) {
    this.cartService.setCountToProduct(product);
    this.selectedProducts = this.cartService.getCartProducts;
    this.rezultProductsSum = this.cartService.getProductsSum();
    this.rezultProductsCount = this.cartService.getProductsCount();
  }

  onCleanProducts() {
    this.cartService.removeAllProducts();
    this.selectedProducts = this.cartService.getCartProducts;
  }
}
