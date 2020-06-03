import { createSelector } from 'reselect';

const cartItemsFromStore = state => state.cart.cartItems;


export const selectTotalCost = createSelector(
    cartItemsFromStore ,
    cartItems => {
        let cost = 0;
        cartItems.forEach(element => cost +=element.price);
        return cost;
    }
);

export const selectTotalItemCount = createSelector(
    cartItemsFromStore ,
    cartItems => {
        let mySet = new Set();
        cartItems.forEach(element => mySet.add(element.id));
        return mySet.size;
    }
);


