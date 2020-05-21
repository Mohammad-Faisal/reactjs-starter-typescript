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
    
 
}