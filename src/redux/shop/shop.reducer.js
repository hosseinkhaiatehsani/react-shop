import SHOP_DATA from "./shop.data"

const INISTIAL_SHOP_STATE = {
    collections: SHOP_DATA
}

const ShopReducer = (state = INISTIAL_SHOP_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default ShopReducer;