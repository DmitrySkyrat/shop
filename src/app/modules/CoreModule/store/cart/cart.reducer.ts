import { Action, createReducer, on } from "@ngrx/store";
import { CartState, initialCartState } from "./cart.state";
import * as CartActions from "./cart.action";

const reducer = createReducer(
    initialCartState,
    on(CartActions.getProducts, state => {
        return { ...state };
    }),

    on(CartActions.addProductToCart, (state, {product}) => {
        let data = state.data;

        if (!data.find(p => p.name === product.name)) {
            data = data.concat(product);
        } else {
            data = data.map(p => {
                if (p.name === product.name) {
                    return {...p, count: product.count};
                }
                return p;
            })
        }

        return { ...state, data };
    }),

    on(CartActions.setCountToProduct, (state, {product}) => {
        let data = state.data.map(p => {
            if (p.name === product.name) {
                return {...p, count: product.count};
            }
            return p;
        })
        return {...state, data};
    }),

    on(CartActions.deleteProducts, state => {
        return {...state, data: []};
    }),

    on(CartActions.deleteProduct, (state, {product}) => {
        let data = state.data.filter(p => p.name !== product.name);
        return {...state, data};
    }),

    on(CartActions.getProductsSum, state => {
        let sum = state.data.reduce((acc, item) => acc + item.price * (item.count as number), 0);
        return {...state, sum}
    }),

    on(CartActions.getProductsCount, state => {
        let total = state.data.reduce((acc, item) => acc + (item.count as number), 0);
        return {...state, total}
    }),

    on(CartActions.getEmptyStatus, state => {
        let isEmpty = !!state.data.length;
        return {...state, isEmpty}
    }),
);

export function cartReducer(state: CartState | undefined, action: Action) {
    return reducer(state, action);
}
