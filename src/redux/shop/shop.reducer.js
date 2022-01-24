import ShopActionTypes from "./shop.types";

const INISTIAL_SHOP_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const ShopReducer = (state = INISTIAL_SHOP_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return{
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        default:
            return state;
    }
}

export default ShopReducer;