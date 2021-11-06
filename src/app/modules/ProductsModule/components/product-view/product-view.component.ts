import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { PizzaDescriptionData } from 'src/app/modules/CoreModule/models/config.model';
import { pizzaDescriptions } from 'src/app/modules/CoreModule/services/constant.service';
import { ProductModel } from '../../models/product.model';
import * as CartActions from "../../../CoreModule/store/cart/cart.action";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/modules/CoreModule/store/app.state';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductViewComponent {
  @Input() card!: ProductModel;
  selectedProductSize!: number;
  selectedProductCategory!: string;
  cardCount: number = 0;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
    ) {}

  onAdd(card: ProductModel): void {
    this.cardCount++;
    this.store.dispatch(CartActions.addProductToCart({product: {
      name: card.name,
      size: this.selectedProductSize,
      imgUrl: card.imgUrl,
      price: card.price,
      category: this.selectedProductCategory,
      isAvaliable: card.isAvaliable,
      count: this.cardCount
    }}));
    this.store.dispatch(CartActions.getProductsSum());
    this.store.dispatch(CartActions.getProductsCount());
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

  openDialog() {
    this.dialog.open(DialogProductViewComponent, {
      data: pizzaDescriptions.find((item) => item.name === this.card.name)
    });
    const navigationExtras: NavigationExtras = {
      queryParams: {productID: this.card.name},
      relativeTo: this.route
    }
    this.router.navigate([], navigationExtras);
  }
}

@Component({
  selector: 'app-dialog-product-view',
  templateUrl: './dialog-product-view.html'
})
export class DialogProductViewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: PizzaDescriptionData) {}
}
