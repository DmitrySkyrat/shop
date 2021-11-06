import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/modules/CoreModule/store/app.state';
import { CartProductModel } from '../../models/cart.model';
import * as CartActions from "../../../CoreModule/store/cart/cart.action";
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() product!: CartProductModel;
  constructor(private store: Store<AppState>) {
  }

  onDelete(product: CartProductModel): void {
    this.store.dispatch(CartActions.deleteProduct({ product }));
  }

  increaseCount(product: CartProductModel) {
    let newProduct = { ...product, count: (product.count as number) + 1 };
    this.store.dispatch(CartActions.setCountToProduct({ product: newProduct }));
    this.store.dispatch(CartActions.getProductsSum());
    this.store.dispatch(CartActions.getProductsCount());
  }

  decreaseCount(product: CartProductModel) {
    let newProduct = { ...product, count: (product.count as number) - 1 };
    this.store.dispatch(CartActions.setCountToProduct({ product: newProduct }));
    this.store.dispatch(CartActions.getProductsSum());
    this.store.dispatch(CartActions.getProductsCount());
  }
}
