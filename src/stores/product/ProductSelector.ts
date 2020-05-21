import { createSelector } from 'reselect';

export class CartSelector {
    static getCartItemsFromStore() {
        return {};
    }
}


export const selectFinished = createSelector(
    (state : any ) => state.cart,

    (state, actionType) => actionType,
    CartSelector.getCartItemsFromStore
);

export {};