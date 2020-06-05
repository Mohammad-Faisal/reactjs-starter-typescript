import BaseReducer from '../../utils/BaseReducer';
import BaseResponse from '../../models/BaseResponse';
import ProductAction from './ProductAction';


export default class ProductReducer extends BaseReducer {

    initialState = {

        productList: [
            {
                id:1,
                name: "Lux Soft Touch Soap Value Pack",
                price: 250,
                image: "https://rokkhi.s3-us-west-1.amazonaws.com/products/01yByfxo16NgvXD0Opfy/pic"
            },
            {
                id:2,
                name: "Tuna",
                price: 300,
                image:"https://rokkhi.s3-us-west-1.amazonaws.com/products/028s56xfYURsAJWCEWpc/image"
            },
            {
                id:3,
                name: "Home Made Nimki",
                price: 10,
                image:"https://rokkhi.s3-us-west-1.amazonaws.com/products/0390UOLuF6UvX1KHoGf8/pic"
            },
            {
                id:4,
                name: "Mentos Pure Fresh Chewing Sugarfree Gum (Green Tea Winter Green)",
                price: 10,
                image:"https://rokkhi.s3-us-west-1.amazonaws.com/products/05w7uWhOMjz1TjeYZnRe/pic"
            },
            {
                id:5,
                name: "Body Lotion",
                price: 150,
                image:"https://rokkhi.s3-us-west-1.amazonaws.com/products/071ANbGPw3Gd3B7iYhyi/pic"
            },
            {
                id:5,
                name: "Dove Beauty Bar Pink",
                price: 150,
                image:"https://rokkhi.s3-us-west-1.amazonaws.com/products/08fltHrSoSeTsuIn7Cke/pic"
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