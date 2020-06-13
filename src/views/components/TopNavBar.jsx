import React from 'react'
import {Input} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

function TopNavBar(props) {

    const dispatch = useDispatch();

    console.log(props);

    return (
        <div className="container-app-topbar">
            <h1 onClick={ () => props.history.push("/")} className="topbar-text">  <b style={{color:"#00bd87"}}>Rokkhi</b> Bazar</h1>
            <Input style={{width:"300px"}} icon='search' placeholder='Search...' />
            <div></div>
            <div> Offers and Help </div>
            <div> Account Information</div>
        </div>
    )
}


export default withRouter(TopNavBar)