import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  @Input()
  card!: ProductModel;

  constructor() { }

  ngOnInit(): void {
    console.log('hello');
  }

  buy() {
    console.log('buy');
  }
}
