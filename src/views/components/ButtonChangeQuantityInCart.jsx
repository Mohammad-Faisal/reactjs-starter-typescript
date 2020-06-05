
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useProductStatusInCart from '../hooks/useProductStatusInCart';
import CartAction from '../../stores/cart/CartAction';
import { CartIconMedium, PlusIconMedium, MinusIconMedium } from './IconsProvider';


const ButtonChangeQuantityInCart = (props) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const { productStatus, productCount } = useProductStatusInCart(props.productItem.id);

    const additemToCart = useCallback(() => {
        dispatch(CartAction._addItemToCart(props.productItem));
    })

    const removeItemFromCart = useCallback(() => {
        dispatch(CartAction._removeItemFromCart(props.productItem));
    })

    return (
        <div className="container-add-to-cart-quantity-vertical">
            <div onClick={additemToCart}> <PlusIconMedium /> </div>
            <div> {productCount}</div>
            <div onClick={removeItemFromCart}> <MinusIconMedium /> </div>
        </div>

    )
}

export default ButtonChangeQuantityInCart;