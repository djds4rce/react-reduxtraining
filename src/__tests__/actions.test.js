import * as actions from '../actions/actions';
import {actionList} from '../actions/actionList';

describe('actions', () => {
    it('should create an item', () => {
      const item = {price:12,name:"test"};
      const expectedAction = {
        type: actionList.ADD_ITEM,
        id:0,
        item
      }
      expect(actions.addItem(item)).toEqual(expectedAction)
    });
    it('It should add Item to Cart', () => {
        const item = {price:12,name:"test",id:0};
        const expectedAction = {
          type: actionList.ADD_TO_CART,
          item
        }
        expect(actions.addToCart(item)).toEqual(expectedAction)
      });
      it('It should remove Item to Cart', () => {
        const id = 0;
        const expectedAction = {
          type: actionList.REMOVE_FROM_CART,
          id
        }
        expect(actions.removeFromCart(id)).toEqual(expectedAction)
      });
  })
