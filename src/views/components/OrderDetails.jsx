
import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalItemCount, selectTotalCost } from '../../stores/cart/CartSelector';
import ProductInCart from './ProductInCart';
import _ from 'lodash';

import { CartIconLarge, CloseIconMedium } from './IconsProvider';
import ProductInOrder from './ProductInOrder';


const OrderDetails = (props) => {

    const dispatch = useDispatch();
    const [visible, setVisible] = useState(true)
    const cartItems = useSelector(state => state.cart.cartItems);
    const [cartIndividualItems, setCartIndividualItems] = useState([])
    const totalCost = useSelector(selectTotalCost);
    const totalItem = useSelector(selectTotalItemCount);

    useEffect(() => {
        const distinctItems = _.uniqBy(cartItems, (item) => item.id);
        setCartIndividualItems(Array.from(distinctItems));
    }, [cartItems])


    return (
        <div className="container-order-details">
            <div className="container-cart-details-topbar">
                Your Order
            </div>
            <div className="container-cart-details-items">
                {cartIndividualItems.map(productItem => <ProductInOrder productItem={productItem} />)}
            </div>

            <div style={{ height: "1px", background: "#000000" }}></div>

            <div className="container-total-amount">
                <b>Total Amount</b>
                <div>{totalCost}</div>
            </div>

            <div className="container-total-amount">
                <b>Shipping Cost</b>
                <div>{60}</div>
            </div>

            <div style={{ height: "1px", background: "#000000" }}></div>
            <div className="container-total-amount">
                <b>Amount to be paid</b>
                <div>{parseInt(totalCost) + 60}</div>
            </div>

        </div>
    )
}

export default OrderDetails;