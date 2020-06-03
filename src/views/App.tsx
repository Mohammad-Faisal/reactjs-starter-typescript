import React from 'react';
import './App.scss';
import './pages/pages.scss';
import { PageProduct } from './pages/PageProduct';

function App() {
  return (
    <div className="container-app">
      <div className="container-app-topbar">
        This is the topbar
        </div>
      <div className="container-app-mainbar">

        <div> this is the siebar</div>
        <PageProduct />
      </div>

    </div>
  );
}

export default App;
