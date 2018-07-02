import React, { Component } from 'react';
import {connect} from 'react-redux';

import '../App.css';

import {addItem} from '../actions/actions'
import {bindActionCreators} from 'redux';

class ItemAdd extends Component {
  constructor(props){
    super(props);
    this.state = {name:'',price:0};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.actions.addItem({name:this.state.name,price:this.state.price});
    this.setState({name:'',price:0});
  }
  render() {
    return (
        <div className='item-add'>
        <form name='shopping-cart' onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
          <br/>
          <label>Price:</label>
          <input name='price' type='number' value={this.state.price} onChange={this.handleChange} />
          <br/>
          <input type='submit' value='submit'/>
        </form>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch,ownProps){
  return { actions: bindActionCreators({addItem}, dispatch) };
}
export default connect(undefined,mapDispatchToProps)(ItemAdd);