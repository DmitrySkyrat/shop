import { Action, createReducer, on } from '@ngrx/store';
import { initialProductsState, ProductsState } from './products.state';
import * as ProductsActions from "./products.actions";

const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.getProducts, state => {
    return { ...state };
  })
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}
