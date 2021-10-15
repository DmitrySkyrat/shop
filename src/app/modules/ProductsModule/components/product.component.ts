import { Component, ViewChild } from "@angular/core";
import { OrderByPipe } from "../../SharedModule/pipes/order-by.pipe";
import { ProductsService } from "../services/products.service";
import { ProductListComponent } from "./product-list/product-list.component";
import { map } from "rxjs/operators";
import { AppSettingsService } from "../../CoreModule/services/app-settings.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    providers: [OrderByPipe]
})
export class ProductComponent {
    @ViewChild(ProductListComponent) child!: ProductListComponent;

    constructor(
        private orderByPricePipe: OrderByPipe,
        private appSettingsService: AppSettingsService
    ) {
        this.appSettingsService.setAppSettings();
    }
    showFiller = false;

    orderByKey(key: string) {
        this.child.cards$.then(products => this.orderByPricePipe.transform(products, key));
    }
}
