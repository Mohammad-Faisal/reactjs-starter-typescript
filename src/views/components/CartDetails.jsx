
import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalItemCount, selectTotalCost } from '../../stores/cart/CartSelector';
import ProductInCart from './ProductInCart';
import _ from 'lodash';
import { withRouter } from "react-router";

import { CartIconLarge, CloseIconMedium } from './IconsProvider';


const CartDetails = (props) => {

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
        <div className="container-cart-details">
            <div className="container-cart-details-topbar">
                <div className="cart-details-cart-items"> <CartIconLarge /> {totalItem} items  </div>
                <div> <CloseIconMedium /></div>
            </div>
            <div className="container-cart-details-items">
                {cartIndividualItems.map(productItem => <ProductInCart key={productItem.id} productItem={productItem} />)}
            </div>
            <div onClick={() => props.history.push('confirmOrder')} className="checkout-button-cart-details">

                <div className="checkout-text"style={{ color: "#fff", fontWeight: "bold" }}> Checkout </div>
                <div className="checkout-round-text">$ {totalCost}</div>
            </div>
        </div>


    )
}

export default withRouter(CartDetails);