import BaseReducer from '../../utils/BaseReducer';
import BaseResponse from '../../models/BaseResponse';
import CartAction from './CartAction';


export default class CartReducer extends BaseReducer {

    initialState = {
        cartItems: {},
    };

    [CartAction.ADD_ITEM_TO_CART](state, action) {
        
        const product = action.payload;
        const productId = product.id;
        let currentCartItems = state.cartItems;
        const hasCurrentProduct = currentCartItems.hasOwnProperty(productId);
    
        let productCount = 1 ;
        if(hasCurrentProduct) productCount = currentCartItems[productId].productCount +1;

        currentCartItems = {
            ...currentCartItems ,
            [productId] : {product , productCount} 
        }

        return {
            ...state,
            cartItems: currentCartItems,
        };
    }


    [CartAction.REMOVE_ITEM_FROM_CART](state, action) {

        const product = action.payload;
        const productId = product.id;
        let currentCartItems = state.cartItems;
        const hasCurrentProduct = currentCartItems.hasOwnProperty(productId);

        let productCount = 0;
        if(hasCurrentProduct)productCount =currentCartItems[productId].productCount - 1;


        if (productCount === 0) {
            delete currentCartItems[productId];
            console.log(currentCartItems);
            return {
                ...state,
                cartItems: currentCartItems,
            };
        }
        else{
            currentCartItems = {
                ...currentCartItems ,
                [productId] : {product , productCount} 
            }

            return {
                ...state,
                cartItems: currentCartItems,
            };
        }

 

       
    }

    // [CartAction.REQUEST_GET_CART_ITEMS_FINISHED](state, action) {
    //     return {
    //         ...state,
    //         cartItems: action.payload,
    //     };
    // }


}