import React from 'react';
import {App} from '../App';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {ItemAdd} from '../components/ItemAdd';
import {Cart} from '../components/Cart';
import {ItemList} from '../components/ItemList';
import { mount } from 'enzyme';
import {MemoryRouter } from "react-router-dom";

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders App without crashing', () => {
 // const wrapper = mount(
    //<MemoryRouter>
   //   <App/>
    //</MemoryRouter>
  //);
  //ReactDOM.render(wrapper, div);
  //ReactDOM.unmountComponentAtNode(div);
});

it('renders Cart without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart cart={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders item add without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemAdd />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders  Item List without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemList items={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});