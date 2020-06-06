import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ConfirmOrderSteps from '../components/ConfirmOrderSteps';
import CartDetails from '../components/CartDetails';
import OrderDetails from '../components/OrderDetails';

export const PageOrder = (props) => {

    const dispatch = useDispatch();
    const [visible, setVisible] = useState(true)
    const productList = useSelector(state => state.product.productList);

    return (

        <div className="container-page-place-order">
            <ConfirmOrderSteps />
            <OrderDetails/>            
        </div>

    )

}

