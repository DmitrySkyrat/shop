import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartProductModel } from 'src/app/modules/CartModule/models/cart.model';
import { CartService } from 'src/app/modules/CartModule/services/cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  cartProducts$!: Observable<CartProductModel[]>;

  constructor(private cartService: CartService) {
    this.cartProducts$ = this.cartService.selectedProducts$;
  }

  ngOnInit(): void {

  }

  onScroll() {
    console.log('scrolled!!');
  }
}
