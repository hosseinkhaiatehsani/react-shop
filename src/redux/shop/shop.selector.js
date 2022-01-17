import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectShopCollection],
        collections => collections[collectionUrlParam]
    );

export const selectShopCollectionPreview = createSelector(
    [selectShopCollection],
    collections => Object.keys(collections).map( key => collections[key] )
)
