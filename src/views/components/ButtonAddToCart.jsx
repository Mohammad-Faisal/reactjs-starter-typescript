
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useProductStatusInCart from '../hooks/useProductStatusInCart';
import CartAction from '../../stores/cart/CartAction';


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
        <div style={{ padding: "20px" , border:"1px solid"}}>
            {productStatus === "PRODUCT_IN_CART" ?
                <div>
                    <button onClick={removeItemFromCart}> -1 </button>

                    <button onClick={additemToCart}> +1 </button>
                    <div>currentitemscount {productCount}</div>
                </div> :
                <button onClick={additemToCart}> Add to Cart</button>
            }
        </div>
    )
}

export default ButtonAddToCart;