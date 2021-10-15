import { Injectable } from "@angular/core";
import { EMPTY, first, map, Observable, of, reduce } from "rxjs";
import { CartProductModel } from "../models/cart.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private _selectedProducts: Observable<CartProductModel[]> = of([]);

    get getCartProducts(): Observable<CartProductModel[]> {
        return this._selectedProducts;
    }

    addCartProduct(cartProduct: CartProductModel): void {
        this._selectedProducts = this._selectedProducts.pipe(
            map(products => {
                if (!products.find((product => product.name === cartProduct.name))) {
                    return products.concat(cartProduct);
                } else {
                    this.setCountToProduct(cartProduct);
                    return products;
                }
            })
        )
    }

    deleteCartProduct(cartProduct: CartProductModel): void {
        this._selectedProducts.pipe(
            map(products => products.length ? products.filter(product => product.name !== cartProduct.name) : EMPTY
            ),
        )
    }

    setCountToProduct(cartProduct: CartProductModel): void {
        this._selectedProducts.pipe(
            map(products => products.forEach(product => {
                if (product.name === cartProduct.name) {
                    product.count = cartProduct.count;
                }
            }))
        )
    }

    removeAllProducts(): void {
        this._selectedProducts = this._selectedProducts.pipe(map(products => []));
    }

    getProductsSum(): Observable<number> {
        return this._selectedProducts.pipe(
            map(products => products.reduce((acc, item) => acc + item.price * (item.count as number), 0))
        )
    }

    getProductsCount(): Observable<number> {
        return this._selectedProducts.pipe(
            map(products => products.reduce((acc, item) => acc + (item.count as number), 0))
        )
    }

    isEmptyCart(): boolean {
        return !!this._selectedProducts.pipe(first(products => products.length > 0));
    }
}
