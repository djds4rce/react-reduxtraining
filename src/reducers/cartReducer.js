import {actionList} from '../actions/actionList';

let nextCartItemId = 0;
export const cart = (state = [], action) => {
    switch (action.type) {
        case actionList.ADD_TO_CART:
            let updateCart = state.slice();
            let selectedCartItem = updateCart.find((tupple) => {
                return tupple.itemid === action.item.id;
            });
            if (selectedCartItem === undefined) {
                let item = action.item;
                let cartItem = {
                    name: item.name,
                    price: item.price,
                    qnt: 1,
                    itemid:item.id,
                    id: nextCartItemId++
                }
                updateCart.push(cartItem);
            } else {
                selectedCartItem.qnt = selectedCartItem.qnt + 1;
            }
            return updateCart;
        case actionList.REMOVE_FROM_CART:
            return state.filter((tupple)=>{
                return tupple.itemid !== action.id;
            });
        default:
            return state;
    }
};


