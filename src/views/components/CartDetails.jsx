
import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalItemCount, selectTotalCost } from '../../stores/cart/CartSelector';
import ProductSummary from './ProductSummary';
import _ from 'lodash';

import { useBooleanKnob } from '@stardust-ui/docs-components'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'


const CartDetails = (props) => {

    const dispatch = useDispatch();
    const [visible, setVisible] = useBooleanKnob({ name: 'visible' })
    const cartItems = useSelector(state => state.cart.cartItems);
    const [cartIndividualItems, setCartIndividualItems] = useState([])
    const totalCost = useSelector(selectTotalCost);
    const totalItem = useSelector(selectTotalItemCount);

    useEffect(() => {
        const distinctItems = _.uniqBy(cartItems, (item) => item.id);
        setCartIndividualItems(Array.from(distinctItems));
    }, [cartItems])


    return (
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                width='thin'
            >

                <div style={{ padding: "20px", border: "1px solid" }}>
                    <b>Cart Details</b>
                    {cartIndividualItems.map(productItem => <ProductSummary productItem={productItem} />)}
                    <div> Total amount : {totalCost}</div>
                    <div> Total items : {totalItem} </div>
                </div>

            </Sidebar>

            <Sidebar.Pusher>
                <Segment basic>
                    <Header as='h3'>Application Content</Header>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>


    )
}

export default CartDetails;