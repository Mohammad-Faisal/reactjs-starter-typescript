import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductSummary from '../components/ProductSummary';
import CartPreview from '../components/CartPreview';
import CartDetails from '../components/CartDetails';
import SideNavBar from '../components/SideNavBar';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

export const PageProduct = (props) => {

    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false)
    const productList = useSelector(state => state.product.productList);

    return (

        <div className="container-page-products">

            <div style={{  height:"100%", width:"250px", position: "fixed" }}>
                <SideNavBar />
            </div>

            <div className="container-page-products-list">
                {productList.map(productItem => <ProductSummary productItem={productItem} />)}
                <div onClick={() => setVisible(!visible)}><CartPreview /></div>
                <Sidebar
                    style={{ width: "500px", height: "100%", background: "#fff" }}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    direction="right"
                    onHide={() => setVisible(false)}
                    vertical
                    animation="push"
                    visible={visible}
                >
                    <CartDetails />
                </Sidebar>
            </div>



        </div>

    )

}

