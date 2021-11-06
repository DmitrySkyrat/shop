import { createAction, props } from '@ngrx/store';
import { CartProductModel } from 'src/app/modules/CartModule/models/cart.model';

export const getProducts = createAction('[Cart List Page] GET_CART_PRODUCTS');

export const addProductToCart = createAction(
    '[Product View Page] ADD_PRODUCT',
    props<{product: CartProductModel}>()
);


export const setCountToProduct = createAction(
    '[Cart Item Page] SET_COUNT_TO_PRODUCT',
    props<{product: CartProductModel}>()
);

export const deleteProduct = createAction(
    '[Cart Item Page] DELETE_PRODUCT',
    props<{product: CartProductModel}>()
);
    
export const deleteProducts = createAction('[Cart List Page] DELETE_PRODUCTS');

export const getProductsSum = createAction('[Cart List Page] GET_PRODUCTS_SUM');

export const getProductsCount = createAction('[Cart List Page] GET_PRODUCTS_COUNT');

export const getEmptyStatus = createAction('[Product Cart Page] GET_PRODUCTS_COUNT');
