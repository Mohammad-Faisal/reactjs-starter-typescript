import MiscAction from "../misc/MiscAction";
import CartAction from "./CartAction";

const CartPostEffect = () => (store) => (next) => (action) => {


    if (!action.error) {
        switch (action.type) {
            case CartAction.REQUEST_GET_CART_ITEMS_FINISHED:
                next(MiscAction._showModalSuccess("Cart items found!!!"));
                break;
        }
    }

    next(action);
};

export default CartPostEffect;
