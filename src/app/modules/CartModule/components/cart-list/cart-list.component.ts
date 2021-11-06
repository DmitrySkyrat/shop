import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/modules/CoreModule/store/app.state';
import { CartState } from 'src/app/modules/CoreModule/store/cart/cart.state';
import { CartProductModel } from '../../models/cart.model';
import * as CartActions from "../../../CoreModule/store/cart/cart.action";
import { selectCartSum, selectCartTotal } from 'src/app/modules/CoreModule/store/cart/cart.selector';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  rezultProductsSum$!: Observable<number>;
  rezultProductsCount$!: Observable<number>;
  cartState$!: Observable<CartState>;
  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.cartState$ = this.store.select('cartProducts');
    this.store.dispatch(CartActions.getProductsSum());
    this.store.dispatch(CartActions.getProductsCount());
    this.rezultProductsSum$ = this.store.select(selectCartSum);
    this.rezultProductsCount$ = this.store.select(selectCartTotal);
  }

  trackByItems(index: number, selectedProduct: CartProductModel) {
    return selectedProduct.size;
  }

  order() {
    this.router.navigate(['cart', 'order']);
  }

  onCleanProducts() {
    this.store.dispatch(CartActions.deleteProducts());
  }
}
