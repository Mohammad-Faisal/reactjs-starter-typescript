import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function useProductStatusInCart(productId) {


    const PRODUCT_ADDED = 'PRODUCT_ADDED'
    const PRODUCT_REMOVED = 'PRODUCT_REMOVED'


    const cartItems = useSelector(state => state.cart.cartItems);

    const [productStatus, setProductStatus] = useState("PRODUCT_REMOVED");
    const [productCount, setProductcount] = useState(0);

    useEffect(() => {
        
        const hasCurrentProduct = cartItems.hasOwnProperty(productId);
        
        if(hasCurrentProduct) {
            setProductcount(cartItems[productId].productCount)
            setProductStatus(PRODUCT_ADDED);
        }
        else {
            setProductcount(0)
            setProductStatus(PRODUCT_REMOVED);
        }        
    } , [cartItems , productId]);

    return {productStatus , productCount};
}