import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './../app.state';
import { CartState } from './cart.state';

export const selectCartState = createFeatureSelector<AppState, CartState>('cartProducts');

export const selectCartSum = createSelector(selectCartState, (state: CartState) => state.sum);

export const selectCartTotal = createSelector(selectCartState, (state: CartState) => state.total);

export const selectCartStatus = createSelector(selectCartState, (state: CartState) => state.isEmpty);
