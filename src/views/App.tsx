import React from 'react';
import './App.scss';
import './pages/pages.scss';
import './components/components.scss'
import { PageProduct } from './pages/PageProduct';
import styled from 'styled-components';
import { Route, Switch, withRouter } from "react-router-dom";
import { PageOrder } from './pages/PageOrder';
import { ConnectedRouter } from 'connected-react-router'
import TopNavBar from './components/TopNavBar';


function App(props) {
  return (
    <ConnectedRouter history={props.history}>
      <AppContainer>


        <TopNavBar />


        <Switch>
          <Route exact path={"/"} render={() => <PageProduct />} />
          <Route exact path={"/confirmOrder"} render={() => <PageOrder />} />
          <Route exact path={"/product"} render={() => <PageProduct />} />
        </Switch>

      </AppContainer>
    </ConnectedRouter>

  );
}

export default App;


const AppContainer = styled.div`
  //height:100vh;
  text-align: center;
  display: grid;
  // grid-template-rows: 80px 100%;
`;
