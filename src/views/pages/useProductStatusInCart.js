import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


export default function useProductStatusInCart(productId) {


    const PRODUCT_ADDED = 'PRODUCT_ADDED'
    const PRODUCT_REMOVED = 'PRODUCT_REMOVED'


    const cartItems = useSelector(state => state.cart.cartItems);

    const [productStatus, setProductStatus] = useState("PRODUCT_REMOVED");
    const [productCount, setProductcount] = useState(0);

    useEffect(() => {

        
        let productCount = 0;
        if(cartItems){
            //console.log(cartItems);
            cartItems.forEach(element => {
                if(element.id === productId ) productCount++;
            });    
        }

        console.log( productId , productCount)
  
        if(productCount> 0) {
            setProductcount(productCount)
            setProductStatus(PRODUCT_ADDED);
        }
        else {
            setProductcount(productCount)
            setProductStatus(PRODUCT_REMOVED);
        }        
    } , [cartItems]);

    return {productStatus , productCount};
}