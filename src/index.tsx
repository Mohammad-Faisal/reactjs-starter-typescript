import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import { Provider } from 'react-redux';
import rootStore from './stores/rootStore';
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react';




(async (window) => {

  const initialState = {};
  const history = createBrowserHistory({ basename: '' });
  const store = rootStore(initialState, history);
  const rootEl = document.getElementById('root');

  const render = (Component, el) => {
    ReactDOM.render(
      <React.StrictMode>

        <Provider store={store.store}>
        <Component history={history} dispatch={store.dispatch} />
          {/* <PersistGate loading={null} persistor={store.persistor}>
            <Component history={history} dispatch={store.dispatch} />
          </PersistGate> */}
        </Provider>
      </React.StrictMode>
      ,
      el
    );
  };

  render(App, rootEl);
})(window);
