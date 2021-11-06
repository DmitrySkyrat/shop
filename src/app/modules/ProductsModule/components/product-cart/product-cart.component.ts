import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/modules/CoreModule/store/app.state';
import { selectCartState } from 'src/app/modules/CoreModule/store/cart/cart.selector';
import { CartState } from 'src/app/modules/CoreModule/store/cart/cart.state';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {
  cartProducts$!: Observable<CartState>;

  constructor(private store: Store<AppState>) {
    this.cartProducts$ = this.store.select(selectCartState);
  }

  onScroll() {
    console.log('scrolled!!');
  }
}
