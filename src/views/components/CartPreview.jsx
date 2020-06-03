
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalItemCount , selectTotalCost } from '../../stores/cart/CartSelector';


const CartPreview = (props) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalCost = useSelector(selectTotalCost);
    const totalItem = useSelector(selectTotalItemCount);


    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])


    return (
        <div style={{ padding: "20px" , border:"1px solid"}}>
            <div> Total amount : {totalCost}</div>
            <div> Total items : {totalItem} </div>
        </div>
    )
}

export default CartPreview;