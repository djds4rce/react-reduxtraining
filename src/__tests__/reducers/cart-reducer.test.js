import {actionList} from '../../actions/actionList';
import {cart} from '../../reducers/cartReducer';

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(cart(undefined, {})).toEqual([]);
  })
  it('should add item to cart', () => {
    expect(
      cart([], {
        type: actionList.ADD_TO_CART,
        item: {
          name: 'Item 1',
          price:12,
          id:0
        }
      })
    ).toEqual([
      {
        name: 'Item 1',
        price:12,
        id: 0,
        qnt:1,
        itemid:0
      }
    ])
    
    expect(
      cart([ {
        name: 'Item 1',
        price:12,
        id: 0,
        qnt:1,
        itemid:0
      }], {
        type: actionList.ADD_TO_CART,
        item: {
          name: 'Item 2',
          price:25,
          id:1
        }
      })
    ).toEqual([
      {
        name: 'Item 1',
        price:12,
        id: 0,
        qnt:1,
        itemid:0
      },
      {
        name: 'Item 2',
        price:25,
        id: 1,
        qnt:1,
        itemid:1
      }
    ])
  })
  
  it('should should update the quantity if already present in cart', () => {
    expect(cart([{
      name: 'Item 1',
      price:12,
      id: 0,
      qnt:1,
      itemid:0
    },
    {
      name: 'Item 2',
      price:25,
      id: 1,
      qnt:1,
      itemid:1
    }],{
      type: actionList.ADD_TO_CART,
      item: {
        name: 'Item 1',
        price:12,
        id:0,
      }} )).toEqual([
        {
          name: 'Item 1',
          price:12,
          id: 0,
          qnt:2,
          itemid:0
        },
        {
          name: 'Item 2',
          price:25,
          id: 1,
          qnt:1,
          itemid:1
        }
      ]);
      expect(cart([{
        name: 'Item 1',
        price:12,
        id: 0,
        qnt:1,
        itemid:0
      },
      {
        name: 'Item 2',
        price:25,
        id: 1,
        qnt:1,
        itemid:1
      }],{
        type: actionList.ADD_TO_CART,
        item: {
          name: 'Item 2',
          price:25,
          id:1
        }} )).toEqual([
          {
            name: 'Item 1',
            price:12,
            id: 0,
            qnt:1,
            itemid:0
          },
          {
            name: 'Item 2',
            price:25,
            id: 1,
            qnt:2,
            itemid:1
          }
        ]);
  })

  it('should should the remove the item from cart', () => {
    expect(cart([{
      name: 'Item 1',
      price:12,
      id: 0,
      qnt:1,
      itemid:0
    },
    {
      name: 'Item 2',
      price:25,
      id: 1,
      qnt:1,
      itemid:1
    }],{
      type: actionList.REMOVE_FROM_CART,
      id: 0
      } )).toEqual([
        {
          name: 'Item 2',
          price:25,
          id: 1,
          qnt:1,
          itemid:1
        }
      ]);
      expect(cart([{
        name: 'Item 1',
        price:12,
        id: 0,
        qnt:1,
        itemid:0
      },
      {
        name: 'Item 2',
        price:25,
        id: 1,
        qnt:1,
        itemid:1
      }],{
        type: actionList.REMOVE_FROM_CART,
        id:1
      } )).toEqual([
          {
            name: 'Item 1',
            price:12,
            id: 0,
            qnt:1,
            itemid:0
          }
        ]);
  })
      
})