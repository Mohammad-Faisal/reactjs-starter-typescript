
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ButtonAddToCart from './ButtonAddToCart';
import CartAction from '../../stores/cart/CartAction';
import useProductStatusInCart from '../hooks/useProductStatusInCart';
import { DeleteIconMedium } from './IconsProvider';
import ButtonChangeQuantityInOrder from './ButtonChangeQuantityInOrder';

const ProductInOrder = (props) => {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.productList);

    const { productStatus, productCount } = useProductStatusInCart(props.productItem.id);

    const removeProductFromCart = useCallback(() => {
        dispatch(CartAction._removeProductFormCart(props.productItem));
    })

    return (
        <div className="container-product-in-order">


            <div className="container-product-in-order-image">
                <img className="product-in-order-image" src={props.productItem.image} />
            </div>

            <div className="product-in-cart-details">
                <div className="container-product-nam" style={{ textAlign: "start" }}>{props.productItem.name}</div>
                {/* <div className="container-product-price">$ {props.productItem.price} * {productCount}</div> */}
            </div>

            {/* <ButtonChangeQuantityInOrder productItem={props.productItem} /> */}

            <b style={{fontSize:"16px" }} className="container-product-pric">$ {parseInt(props.productItem.price) * parseInt(productCount)}</b>

            <div className="container-icon-delete" style={{ color: "#FC5C63" }} onClick={removeProductFromCart}><DeleteIconMedium /></div>

        </div>
    )
}

export default ProductInOrder;