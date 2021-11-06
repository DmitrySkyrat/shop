import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/modules/CoreModule/store/app.state';
import { Observable } from 'rxjs';
import { ProductsState } from 'src/app/modules/CoreModule/store/products/products.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  cards$!: Promise<ProductModel[]>;
  productsState$!: Observable<ProductsState>;
  constructor(
    private store: Store<AppState>
    ) {}

  ngOnInit(): void {
    this.productsState$ = this.store.select('products');
  }
}
