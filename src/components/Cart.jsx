import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import '../App.css';
import {removeFromCart} from "../actions/actions";

export class Cart extends Component {
  render() {
    return (
        <div className='cart-list'>
        <h2>Cart Items({this.props.cart.length})</h2>
        <div className='item'>
        <div className='item-coloumn item-info'>Name</div>
                  <div className='item-coloumn item-info'>Quantity</div>
                  <div className='item-coloumn item-price'></div>
                  <div className='item-coloumn item-price'>Price</div>
                  <div className='item-coloumn item-total'> Total Price</div>
        </div>
        { 
          this.props.cart.map((object, i)=>{

        return  <div className='item' key={object.id}> 
                  <div className='item-coloumn item-info'>{object.name}</div>
                  <div className='item-coloumn item-info'>{object.qnt}</div>
                  <div className='item-coloumn item-price'>X</div>
                  <div className='item-coloumn item-price'>{object.price}</div>
                  <div className='item-coloumn item-total'> {object.price*object.qnt}</div>
                  <button onClick={()=>this.props.actions.removeFromCart(object.id)}>Remove from cart</button>
                </div>
        })}
        <p>Grand Total: {this.props.cart.reduce((sum, item) => (
      sum += item.qnt * item.price
    ), 0)}</p>
        </div>
    );
  }
}
function mapDispatchToProps(dispatch,ownProps){
  return { actions: bindActionCreators({removeFromCart}, dispatch) };
}
function mapStateToProps(state,ownProps){
  return {
    items:state.items,
    cart:state.cart
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);