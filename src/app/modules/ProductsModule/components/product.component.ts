import { Component, ViewChild } from "@angular/core";
import { OrderByPipe } from "../../SharedModule/pipes/order-by.pipe";
import { ProductsService } from "../services/products.service";
import { ProductListComponent } from "./product-list/product-list.component";
import { map } from "rxjs/operators";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    providers: [OrderByPipe]
})
export class ProductComponent {
    @ViewChild(ProductListComponent) child!: ProductListComponent;

    constructor(
        private orderByPricePipe: OrderByPipe
    ) { }
    showFiller = false;

    orderByKey(key: string) {
        this.child.cards$.pipe(
            map((products => this.orderByPricePipe.transform(products, key)))
        ).subscribe()
    }
}
