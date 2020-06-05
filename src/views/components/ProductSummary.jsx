
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ButtonAddToCart from './ButtonAddToCart';
import CartAction from '../../stores/cart/CartAction';


const ProductSummary = (props) => {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.productList);

    const removeProductFromCart = useCallback(() => {
        dispatch(CartAction._removeProductFormCart(props.productItem));
    })

    return (
        <div className="container-product-summary">
            <div className="container-product-summary-image">
                <img className="product-summary-image" src={props.productItem.image} />
            </div>

            <div className="container-product-name">{props.productItem.name}</div>
            <div className="container-product-summary-bottom">
                <div className="container-product-price">$ {props.productItem.price}</div>
                <ButtonAddToCart productItem={props.productItem} />
            </div>
            {/* <button onClick={removeProductFromCart}> Remove from cart</button> */}
        </div>
    )
}

export default ProductSummary;