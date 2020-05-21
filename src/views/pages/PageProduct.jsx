import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductSummary from './ProductSummary';

export const PageProduct = (props) => {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.productList);


    return (
        <div>
            {productList.map(productItem => <ProductSummary productItem={productItem} />)}
        </div>
    )

}
