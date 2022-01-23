import ShopActionTypes from "./shop.types";

const INISTIAL_SHOP_STATE = {
    collections: null
}

const ShopReducer = (state = INISTIAL_SHOP_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

export default ShopReducer;