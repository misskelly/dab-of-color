import React from 'react';
import ReactDOM from 'react-dom';

import rootReducer from '../src/redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from '../src/components/App';

import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

const router = (
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

