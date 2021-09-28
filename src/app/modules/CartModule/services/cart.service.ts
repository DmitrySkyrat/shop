import { Injectable } from "@angular/core";
import { CartProductModel } from "../models/cart.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private _selectedProducts: CartProductModel[] = [];

    get getCartProducts(): CartProductModel[] {
        return this._selectedProducts;
    }

    addCartProduct(cartProduct: CartProductModel): void {
        console.log('cartProduct', cartProduct);
        
        if (!this._selectedProducts.find((product => product.name === cartProduct.name))) {
            this._selectedProducts.push(cartProduct);
        } else {
            this.setCountToProduct(cartProduct);
        }
        console.log(this._selectedProducts);
    }

    deleteCartProduct(cartProduct: CartProductModel): void {
        if (this._selectedProducts.length) {
            this._selectedProducts = this._selectedProducts.filter(product => product.name !== cartProduct.name)
        }   
    }

    setCountToProduct(cartProduct: CartProductModel): void {
        this._selectedProducts.forEach(product => {
            if (product.name === cartProduct.name) {
                product.count = cartProduct.count;
            }
        })
    }

    deleteProducts(): void {
        this._selectedProducts = [];
    }

    getProductsSum(): number {
        return this._selectedProducts.reduce((acc, item) => acc + item.price * (item.count as number), 0);
    }

    getProductsCount(): number {
        return this._selectedProducts.reduce((acc, item) => acc + (item.count as number), 0);
    }
}
