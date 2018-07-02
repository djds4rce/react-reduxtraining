import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link } from "react-router-dom";

import './App.css';

import ItemAdd from './components/ItemAdd';
import ItemList from './components/ItemList';
import Cart from './components/Cart';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <ItemAdd/>
        <ItemList/>
        <Link to="/checkout">Checkout</Link>
        <Cart/>
      </div>
    );
  }
}

export default connect()(App);
