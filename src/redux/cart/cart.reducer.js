import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';
import { clearItemFromCart } from './cart.utils';

const INITIAL_CART_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_CART_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return({
                ...state,
                hidden: !state.hidden
            });
        case CartActionTypes.ADD_ITEM:
            return({
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            });
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return({
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.payload)
            })
        default:
            return state;
    }
}

export default CartReducer;