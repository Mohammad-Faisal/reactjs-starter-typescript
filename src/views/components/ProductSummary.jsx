
import React, { useCallback, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import ButtonAddToCart from './ButtonAddToCart';
import CartAction from '../../stores/cart/CartAction';


const  ProductSummary = (props)  =>  {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.productList );
    
    const removeProductFromCart = useCallback(() => {
        dispatch(CartAction._removeProductFormCart(props.productItem));
    })

    return (
        <div style={{padding:"20px" , border:"1px solid"}}>
            <div>{props.productItem.name}</div>
            <img style={{height:"200px" , width:"200px"}} src={props.productItem.image}/>
            <div>{props.productItem.price}</div>
            <ButtonAddToCart  productItem={props.productItem}/>
            <button onClick={removeProductFromCart}> Remove from cart</button>
        </div>
    )
}

export default ProductSummary;