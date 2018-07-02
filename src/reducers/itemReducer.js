
import {actionList} from '../actions/actionList';

export const items = (state = [], action) => {
  switch (action.type) {
    case actionList.ADD_ITEM:
      return [...state,{...action.item,id:action.id}];
    default:
      return state;
  }
};