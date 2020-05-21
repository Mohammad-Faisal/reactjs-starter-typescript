import MiscAction from "../misc/MiscAction";
import CartAction from "./CartAction";

const CartPostEffect = () => (store) => (next) => (action) => {


    if (!action.error) {
        switch (action.type) {
            case CartAction.ADD_ITEM_TO_CART:
                next(MiscAction._showModalSuccess("Cart items found!!!"));
                break;
        }
    }

    next(action);
};

export default CartPostEffect;
