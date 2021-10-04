import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/modules/CartModule/services/cart.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductViewComponent {
  @Input() card!: ProductModel;
  selectedProductSize!: number;
  selectedProductCategory!: string;
  cardCount: number = 0;

  constructor(private cartService: CartService) {}

  onAdd(card: ProductModel): void {
    this.cardCount++;
    this.cartService.addCartProduct({
      name: card.name,
      size: this.selectedProductSize,
      imgUrl: card.imgUrl,
      price: card.price,
      category: this.selectedProductCategory,
      isAvaliable: card.isAvaliable,
      count: this.cardCount
    });
  }

  selectProductCategory(event: any): void {
    if (event.target.type === 'button') {
      this.selectedProductCategory = event.target.value;
    }
  } 

  selectProductSize(event: any): void  {
    if (event.target.type === 'button') {
      this.selectedProductSize = +event.target.value;
    }
  }
}
