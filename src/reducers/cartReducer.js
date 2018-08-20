import {
    actionList
} from '../actions/actionList';

let nextCartItemId = 0;
export const cart = (state = [], action) => {
    switch (action.type) {
        case actionList.ADD_TO_CART:
            let selectedCartItem = false;
            let updatedCart = state.map(function (tupple) {
                if (tupple.itemid == action.item.id) {
                    selectedCartItem = true;
                    return Object.assign({}, tupple, {
                        qnt: tupple.qnt + 1
                    });
                }
                return tupple;
            });
            if (!selectedCartItem) {
                let item = action.item;
                let cartItem = {
                    name: item.name,
                    price: item.price,
                    qnt: 1,
                    itemid: item.id,
                    id: nextCartItemId++
                }
                updatedCart.push(cartItem);
            }
            return updatedCart;
        case actionList.REMOVE_FROM_CART:
            return state.filter((tupple) => {
                return tupple.itemid !== action.id;
            });
        default:
            return state;
    }
};
