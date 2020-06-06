import React from 'react';
import './App.scss';
import './pages/pages.scss';
import './components/components.scss'
import { PageProduct } from './pages/PageProduct';
import styled from 'styled-components';
import { Route, Switch, withRouter } from "react-router-dom";
import { PageOrder } from './pages/PageOrder';
import { ConnectedRouter } from 'connected-react-router'

function App(props) {
  return (
    <AppContainer>


      <div className="container-app-topbar">
        <h1> Rokkhi Bazar</h1>
        <div> Search box</div>
        <div> Offers and Help </div>
        <div> Account Information</div>
      </div>

      <ConnectedRouter history={props.history}>
        <Switch>
          <Route exact path={"/"} render={() => <PageProduct />} />
          <Route exact path={"/confirmOrder"} render={() => <PageOrder />} />
          <Route exact path={"/product"} render={() => <PageProduct />} />
        </Switch>
      </ConnectedRouter>

    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  text-align: center;
  display: grid;
  grid-template-rows: 80px 1fr;
`;
