import MiscAction from "../misc/MiscAction";
import ProductAction from "./ProductAction";

const ProductPostEffect = () => (store) => (next) => (action) => {

    if (!action.error) {
        switch (action.type) {
            case ProductAction.REQUEST_GET_PRODUCTS_FINISHED:
                next(MiscAction._showModalSuccess("Products Found"));
                break;
        }
    }

    next(action);
};

export default ProductPostEffect;
