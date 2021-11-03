import { Injectable } from "@angular/core";
import { BehaviorSubject, first, map, Observable, of } from "rxjs";
import { CartProductModel } from "../models/cart.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
     selectedProducts$ = new BehaviorSubject<CartProductModel[]>([]);

    addCartProduct(cartProduct: CartProductModel): void {
        const value = this.selectedProducts$.value;
        if (!value.find((product => product.name === cartProduct.name))) {
            this.selectedProducts$.next([...value, cartProduct]);
        } else {
            this.setCountToProduct(cartProduct);
        }
    }

    deleteCartProduct(cartProduct: CartProductModel): void {
        const value = this.selectedProducts$.value;
        this.selectedProducts$.next([...value.filter(product => product.name !== cartProduct.name)]);
    }

    setCountToProduct(cartProduct: CartProductModel): void {
        const value = this.selectedProducts$.value;
        value.forEach(product => {
            if (product.name === cartProduct.name) {
                product.count = cartProduct.count;
            }
        });
        this.selectedProducts$.next([...value]);
    }

    removeAllProducts(): void {
        this.selectedProducts$.next([]);
    }

    getProductsSum(): Observable<number> {  
        return this.selectedProducts$.pipe(
            map(products => products.reduce((acc, item) => acc + item.price * (item.count as number), 0))
        )
    }

    getProductsCount(): Observable<number> {
        return this.selectedProducts$.pipe(
            map(products => products.reduce((acc, item) => acc + (item.count as number), 0))
        )
    }

    isEmptyCart(): boolean {
        return !!this.selectedProducts$.pipe(first(products => products.length > 0));
    }
}
