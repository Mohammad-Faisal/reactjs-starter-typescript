import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


export default function useProductStatusInCart(productId) {


    const PRODUCT_IN_CART = 'PRODUCT_IN_CART'
    const PRODUCT_NOT_IN_CART = 'PRODUCT_NOT_IN_CART'


    const cartItems = useSelector(state => state.cart.cartItems);

    const [productStatus, setProductStatus] = useState("PRODUCT_REMOVED");
    const [productCount, setProductcount] = useState(0);

    useEffect(() => {

        
        let productCount = 0;
        if(cartItems){
            
            cartItems.forEach(element => {
                if(element.id === productId ) productCount++;
            });
        }

  
        if(productCount> 0) {
            setProductcount(productCount)
            setProductStatus(PRODUCT_IN_CART);
        }
        else {
            setProductcount(productCount)
            setProductStatus(PRODUCT_NOT_IN_CART);
        }        
    } , [cartItems]);

    return {productStatus , productCount};
}