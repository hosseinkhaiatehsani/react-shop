import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectShopCollection],
        collections => (collections ? collections[collectionUrlParam] : null)
    );

export const selectShopCollectionPreview = createSelector(
    [selectShopCollection],
    collections => collections ? Object.keys(collections).map( key => collections[key] ) : []
);

export const selectShopCollectionIsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectShopCollectionIsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)