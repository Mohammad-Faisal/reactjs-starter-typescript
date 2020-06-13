import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Step, Button, Input } from 'semantic-ui-react'
import { InputWithLabel } from './InputWithLabel'
import { selectTotalItemCount, selectTotalCost } from '../../stores/cart/CartSelector';

const ConfirmOrderSteps = () => {

    const [active, setActive] = useState("Shipping")
    const [shippingComplete, setShippingComplete] = useState(false)
    const [confirmComplete, setConfirmComplete] = useState(false)
    const totalCost = useSelector(selectTotalCost);

    return (
        <div className="container-confirm-order">
            <Step.Group size='small'>
                <Step
                    completed={shippingComplete}
                    active={active === 'Shipping'}
                    icon='truck'
                    onClick={() => setActive("Shipping")}
                    title='Shipping'
                    description='Enter shipping address'
                />
            
                <Step
                    completed={confirmComplete}
                    active={active === 'Confirm'}
                    icon='credit card'
                    onClick={() => setActive("Confirm")}
                    title='Confirm'
                    description='Confirm Order'
                />
            </Step.Group>

            {active === "Shipping" &&
                <div className="container-confirm-order-forms">
                     <Input label='+880' icon="mobile" placeholder='Mobile Number' />
                    <InputWithLabel placeholder="Please provide your delivery address" icon="building" />
                    <Button  style={{backgroundColor:"#00bd87"}} size='large' color="teal" onClick={() => { setActive("Confirm"); setShippingComplete(true) }} fluid content='Next' icon='right arrow' labelPosition='right' />
                </div>
            }


            {active === "Confirm" &&
                <div className="container-confirm-order-forms">
                    <h1> Total Amount ${totalCost}</h1>

                    <Button size='large' style={{backgroundColor:"#00bd87"}} onClick={() => { setActive("Confirm"); setConfirmComplete(true) }} fluid content='Confirm Order' icon='checkmark' labelPosition='right' />
                </div>
            }

        </div>


    )
}

export default ConfirmOrderSteps
