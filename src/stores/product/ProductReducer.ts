import BaseReducer from '../../utils/BaseReducer';
import BaseResponse from '../../models/BaseResponse';
import ProductAction from './ProductAction';


export default class ProductReducer extends BaseReducer {

    initialState = {

        productList: [
            {
                id:1,
                name: "First Product",
                price: 10,
            },
            {
                id:2,
                name: "second Product",
                price: 10,
            },
            {
                id:3,
                name: "third Product",
                price: 10,
            },
            {
                id:4,
                name: "fourth Product",
                price: 10,
            },
            {
                id:5,
                name: "fifth Product",
                price: 10,
            },
        ],
    };

    [ProductAction.REQUEST_GET_PRODUCTS_FINISHED](state, action) {
        return {
            ...state,
            productList: action.payload,
        };
    }


}