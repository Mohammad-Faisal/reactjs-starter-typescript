import BaseReducer from '../../utils/BaseReducer';
import BaseResponse from '../../models/BaseResponse';
import CartAction from './CartAction';


export default class CartReducer extends BaseReducer {

    initialState = {
        cartItems: [],
    };

    [CartAction.ADD_ITEM_TO_CART](state, action) {

        const product  =  {...action.payload};
        const cartItems = state.cartItems;
        let currentCartItems = cartItems.concat([product]);

        return {
            ...state,
            cartItems: currentCartItems,
        };

    }


    [CartAction.REMOVE_ITEM_FROM_CART](state, action) {

        let currentCartItems = state.cartItems.concat([]);

        for (var i = 0; i < currentCartItems.length; i++) {
            if (currentCartItems[i].id === action.payload.id) {
                currentCartItems.splice(i, 1);
                break;
            }
        }

        console.log({
            ...state,
            cartItems: currentCartItems,
        });

        return {
            ...state,
            cartItems: currentCartItems,
            //cartItems: "asdf",
        };
    }

    // [CartAction.REQUEST_GET_CART_ITEMS_FINISHED](state, action) {
    //     return {
    //         ...state,
    //         cartItems: action.payload,
    //     };
    // }


}