import ActionUtility from '../../utils/ActionUtility';
import CartEffect from './CartEffect';

export default class CartAction {


    
    static REQUEST_GET_CART_ITEMS = 'REQUEST_GET_CART_ITEMS';
    static REQUEST_GET_CART_ITEMS_FINISHED = 'REQUEST_GET_CART_ITEMS_FINISHED';

   

    static _requestGetCartItems(objectId) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, CartAction.REQUEST_GET_CART_ITEMS, CartEffect._requestGetCartItems, objectId )
        }
    }

    static ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
    static REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
    static CLEAR_CART = 'CLEAR_CART';

    static _addItemToCart(product) {
        return ActionUtility._createAction(CartAction.ADD_ITEM_TO_CART, product)
    }
    
    static _removeItemFromCart(product) {
        return ActionUtility._createAction(CartAction.REMOVE_ITEM_FROM_CART, product)
    }

    static _clearCart() {
        return ActionUtility._createAction(CartAction.CLEAR_CART)
    }

 
}