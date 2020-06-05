
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useProductStatusInCart from '../hooks/useProductStatusInCart';
import CartAction from '../../stores/cart/CartAction';
import {CartIconMedium , PlusIconMedium , MinusIconMedium} from './IconsProvider';


const ButtonAddToCart = (props) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const { productStatus, productCount } = useProductStatusInCart(props.productItem.id);

    const additemToCart = useCallback(() => {
        dispatch(CartAction._addItemToCart(props.productItem));
    })

    const removeItemFromCart = useCallback(() => {
        dispatch(CartAction._removeItemFromCart(props.productItem));
    })

    useEffect(() => {
       // console.log(cartItems);
    }, [cartItems])


    return (
        <div>
            {productStatus === "PRODUCT_IN_CART" ?
                <div className="container-add-to-cart-quantity">
                    <div onClick={removeItemFromCart}> <MinusIconMedium /> </div>
                    <div> {productCount}</div>
                    <div onClick={additemToCart}> <PlusIconMedium /> </div>
                </div> :
                <div className="button-add-to-cart" onClick={additemToCart}>
                     <CartIconMedium /> 
                     <div> Cart</div>
                     </div>
            }
        </div>
    )
}

export default ButtonAddToCart;