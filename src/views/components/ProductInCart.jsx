
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ButtonAddToCart from './ButtonAddToCart';
import CartAction from '../../stores/cart/CartAction';
import useProductStatusInCart from '../hooks/useProductStatusInCart';
import {DeleteIconMedium} from './IconsProvider';
import ButtonChangeQuantityInCart from './ButtonChangeQuantityInCart';

const ProductInCart = (props) => {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.productList);

    const { productStatus, productCount } = useProductStatusInCart(props.productItem.id);

    const removeProductFromCart = useCallback(() => {
        dispatch(CartAction._removeProductFormCart(props.productItem));
    })

    return (
        <div className="container-product-in-cart">
            <ButtonChangeQuantityInCart  productItem={props.productItem} />

            <div className="container-product-in-cart-image">
                <img className="product-in-cart-image" src={props.productItem.image} />
            </div>

            <div className="product-in-cart-details">
                <div className="container-product-name" style={{textAlign:"start"}}>{props.productItem.name}</div>
                <div className="container-product-price">$ {props.productItem.price} * {productCount}</div>
            </div>

            <div className="container-product-price">$ { parseInt(props.productItem.price) * parseInt(productCount)}</div>

            <div className="container-icon-delete" style={{color:"#FC5C63"}} onClick={removeProductFromCart}><DeleteIconMedium /></div>
    
        </div>
    )
}

export default ProductInCart;