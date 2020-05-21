
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ButtonAddToCart from './ButtonAddToCart';


const  ProductSummary = (props)  =>  {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.productList );
    
    return (
        <div style={{padding:"20px"}}>
            <div>{props.productItem.name}</div>
            <div>{props.productItem.price}</div>
            <ButtonAddToCart  productItem={props.productItem}/>
        </div>
    )
}

export default ProductSummary;