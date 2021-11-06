import { CartProductModel } from "src/app/modules/CartModule/models/cart.model";

export interface CartState {
    data: ReadonlyArray<CartProductModel>;
    readonly sum: number;
    readonly total: number;
    readonly error: string;
    readonly isEmpty: boolean;
}

export const initialCartState: CartState = {
    data: [],
    sum: 0,
    total: 0,
    error: '',
    isEmpty: true
}
