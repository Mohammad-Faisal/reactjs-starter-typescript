
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalItemCount , selectTotalCost } from '../../stores/cart/CartSelector';
import {CartPreviewCartIcon} from './IconsProvider';

const CartPreview = (props) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalCost = useSelector(selectTotalCost);
    const totalItem = useSelector(selectTotalItemCount);


    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    return (
        <div className='container-cart-preview' >
            <div className="cart-preview-items"> <CartPreviewCartIcon /> {totalItem} items </div>
            <div className="cart-preview-amount"> $ {totalCost}</div>
        </div>
    )
}

export default CartPreview;