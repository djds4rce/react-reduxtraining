import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import '../App.css';
import {addToCart} from "../actions/actions"; 


export class ItemList extends Component {
  render() {
    return (
        <div className='item-list'>
        <h2>All Items({this.props.items.length})</h2>
        { 
          this.props.items.map((object, i)=>{
        return  <div className='item' key={object.id}> 
                  <p className='item-info'>{object.name} : {object.price};</p>
                  <button onClick={()=>this.props.actions.addToCart(object)}>Add to cart</button>
                </div>
        })}
        </div>
    );
  }
}

function mapStateToProps(state,ownProps){
  return {
    items:state.items
  };
}

function mapDispatchToProps(dispatch,ownProps){
  return { actions: bindActionCreators({addToCart}, dispatch) };
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemList);