import ShopActionTypes from "./shop.types";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { converCollectionSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsError = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_ERROR,
    payload: errorMessage
})

export const fetchCollectionsAsyncStart = () => {
    return async(dispatch) => {
        try {
            const db = getFirestore();
            const collectionRef = collection(db, 'collections');
            dispatch(fetchCollectionsStart());

            const querySnapshot = await getDocs(collectionRef);
            const collectionMap = converCollectionSnapshotToMap(querySnapshot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        } catch (error) {
            dispatch(fetchCollectionsError(error))
        }
    }

}

