import React from 'react';
import './App.scss';
import './pages/pages.scss';
import './components/components.scss'
import { PageProduct } from './pages/PageProduct';
import CartDetails from './components/CartDetails';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>


      <div className="container-app-topbar">
        <h1> Rokkhi Bazar</h1>
        <div> Search box</div>
        <div> Offers and Help </div>
        <div> Account Information</div>
      </div>

      <div className="container-app-mainbar">
        <div> this is the siebar</div>
        <PageProduct />
      </div>
     

    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  text-align: center;
  display: grid;
  grid-template-rows: 80px 1fr;
`;
