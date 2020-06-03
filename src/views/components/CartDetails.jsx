
import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalItemCount, selectTotalCost } from '../../stores/cart/CartSelector';
import ProductSummary from '../pages/ProductSummary';
import _ from 'lodash';

const CartDetails = (props) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const [cartIndividualItems, setCartIndividualItems] = useState([])
    const totalCost = useSelector(selectTotalCost);
    const totalItem = useSelector(selectTotalItemCount);

    useEffect(() => {
        const distinctItems = _.uniqBy(cartItems, (item) => item.id);
        setCartIndividualItems(Array.from(distinctItems));
    }, [cartItems])


    return (
        <div style={{ padding: "20px", border: "1px solid" }}>
            <b>Cart Details</b>
            {cartIndividualItems.map(productItem => <ProductSummary productItem={productItem} />)}
            <div> Total amount : {totalCost}</div>
            <div> Total items : {totalItem} </div>
        </div>
    )
}

export default CartDetails;