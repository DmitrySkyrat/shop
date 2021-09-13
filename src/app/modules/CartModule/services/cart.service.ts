import { Injectable } from "@angular/core";
import { EType, ProductModel } from "../../ProductsModule/models/product.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    _selectedProducts: ProductModel[] = [
        {name: 'CheeseburgerPizza', size: 22, price: 11, category: EType.CheeseBoard, isAvaliable: true},
        {name: 'CheeseburgerPizza', size: 30, price: 11, category: EType.Thin, isAvaliable: true},
        {name: 'CheeseburgerPizza', size: 36, price: 11, category: EType.Traditional, isAvaliable: true},
        {name: 'CheeseburgerPizza', size: 30, price: 11, category: EType.CheeseBoard, isAvaliable: true}
    ] ;

    get getCartProducts(): ProductModel[] {
        return this._selectedProducts;
    }
}
