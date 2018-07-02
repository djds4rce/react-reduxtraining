import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers,createStore} from 'redux';

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {cart} from './reducers/cartReducer';
import {items} from './reducers/itemReducer';

const cartStore = createStore(combineReducers({
  cart,
  items
}));

ReactDOM.render(<Provider store={cartStore}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
