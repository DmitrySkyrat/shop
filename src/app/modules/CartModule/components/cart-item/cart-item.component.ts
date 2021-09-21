import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProductModel } from '../../models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() product!: CartProductModel;
  @Output() delete: EventEmitter<CartProductModel> = new EventEmitter<CartProductModel>();
  @Output() setCountToProduct: EventEmitter<CartProductModel> = new EventEmitter<CartProductModel>();
  constructor() {}

  onDelete(product: CartProductModel): void {
    this.delete.emit(product);
  }

  increaseCount(product: CartProductModel) {
    product.count = product.count as number + 1;
    this.setCountToProduct.emit(product);
  }

  decreaseCount(product: CartProductModel) {
    product.count = product.count as number - 1;
    this.setCountToProduct.emit(product);
  }
}
