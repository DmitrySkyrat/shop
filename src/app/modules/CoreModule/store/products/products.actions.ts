import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/modules/ProductsModule/models/product.model';

export const getProducts = createAction(
  '[Product List Page] GET_PRODUCTS',
  props<{products: ProductModel[]}>()
);
