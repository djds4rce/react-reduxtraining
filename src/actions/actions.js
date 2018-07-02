import {actionList} from './actionList';

let nextStoreItemId = 0;


export const addItem = (item) => {
  return {
    type: actionList.ADD_ITEM,
    id: nextStoreItemId++,
    ...{item}
  };
};

export const addToCart = (item) => {
  return {
    type: actionList.ADD_TO_CART,
    ...{item}
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionList.REMOVE_FROM_CART,
    id:id
  };
};