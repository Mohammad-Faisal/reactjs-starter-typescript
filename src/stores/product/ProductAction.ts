import ActionUtility from '../../utils/ActionUtility';
import ProductEffect from './ProductEffect';

export default class ProductAction {


    
    static REQUEST_GET_PRODUCTS = 'REQUEST_GET_PRODUCTS';
    static REQUEST_GET_PRODUCTS_FINISHED = 'REQUEST_GET_PRODUCTS_FINISHED';

   
    static _requestGetProducts(objectId) {
        return async (dispatch, getState) => {
            await ActionUtility._createThunkEffect(dispatch, ProductAction.REQUEST_GET_PRODUCTS, ProductEffect._requestGetProducts, objectId )
        }
    }
    
 
}