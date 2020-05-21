import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer';
import errorToastMiddleware from './special/middlewares/errorToastMiddleware';
import storage from 'redux-persist/lib/storage';

import CartPostEffect from './cart/CartPostEffect';
import ProductPostEffect from './product/ProductPostEffect';

const persistConfig = {
    key: "rokkhi-home-web",
    storage: storage,
    whitelist: ["cart"]
};


export default (initialState, history) => {

    const tempReducer = rootReducer(history)
    const persistedReducer = persistReducer(persistConfig, tempReducer);

    const store = createStore(persistedReducer, initialState,
        applyMiddleware(
            thunk,
            routerMiddleware(history),
            errorToastMiddleware(),
            CartPostEffect(),
            ProductPostEffect(),
        ));
    let persistor = persistStore(store)
    return { store, persistor };
};

