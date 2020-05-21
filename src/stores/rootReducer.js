import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import ErrorReducer from './special/error/ErrorReducer';
import RequestingReducer from './special/requesting/RequestingReducer';
import ToastsReducer from './special/toasts/ToastsReducer';
import FinishedReducer from "./special/finished/FinishedReducer";
import MiscReducer from './misc/MiscReducer';
import CartReducer from './cart/CartReducer'
import ProductReducer from './product/ProductReducer';


export default (history) => {
    const reducerMap = {
        error: ErrorReducer.reducer,
        requesting: RequestingReducer.reducer,
        finished: FinishedReducer.reducer,
        
        router: connectRouter(history),

        toasts: new ToastsReducer().reducer,
        misc: new MiscReducer().reducer,
        
        cart: new CartReducer().reducer,
        product: new ProductReducer().reducer,
    };

    return combineReducers(reducerMap);
};
