import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductSummary from '../components/ProductSummary';
import CartPreview from '../components/CartPreview';
import CartDetails from '../components/CartDetails';

export const PageProduct = (props) => {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.productList);

    return (
        <div className="container-page-products">
            {productList.map(productItem => <ProductSummary productItem={productItem} />)}
            {/* <CartDetails /> */}
            <CartPreview />
        </div>

    )

}

