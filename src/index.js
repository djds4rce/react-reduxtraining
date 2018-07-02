import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers,createStore,applyMiddleware} from 'redux';
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import {
  ConnectedRouter,
  routerMiddleware
} from "react-router-redux";



import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {cart} from './reducers/cartReducer';
import {items} from './reducers/itemReducer';
import Cart from './components/Cart';


const history = createHistory();
const middleware = routerMiddleware(history);

const cartStore = createStore(combineReducers({
  cart,
  items
},applyMiddleware(middleware)));

ReactDOM.render(<Provider store={cartStore}>
                  <ConnectedRouter history={history}>
                  <div>
                  <Route exact path="/" component={App}/>
                  <Route path="/checkout" component={Cart} />   
                  </div>                                 
                  </ConnectedRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
