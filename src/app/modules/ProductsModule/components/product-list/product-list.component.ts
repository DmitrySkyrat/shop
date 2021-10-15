import { Component, OnInit } from '@angular/core';
import { ProductsPromiseService } from 'src/app/modules/CoreModule/services/products-promise.service';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  cards$!: Promise<ProductModel[]>;
  constructor(private productsService: ProductsService, private products: ProductsPromiseService) {}

  ngOnInit(): void {
    this.cards$ = this.products.getProducts();
  }
}
