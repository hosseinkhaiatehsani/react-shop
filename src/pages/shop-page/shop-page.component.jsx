import React from "react";
import { Routes, Route } from "react-router-dom";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { converCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { UpdateCollections } from "../../redux/shop/shop.action";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import './shop-pages.styles.scss';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount = () => {
        const { updatedCollection } = this.props;
        const db = getFirestore();
        const collectionRef = collection(db, 'collections');

        this.unsubscribeFromSnapshot = onSnapshot(collectionRef, (snapshot) => {
            const collectionsMap = converCollectionSnapshotToMap(snapshot);
            updatedCollection(collectionsMap);
        })


        // another method to get data just need to make function async
        // and import getDocs
        
        // const querySnapshot = await getDocs(collectionRef);
        // converCollectionSnapshotToMap(querySnapshot)

    }

    render() {
        return(
            <div className="shop-page">
                <Routes>
                    <Route path='' element={<CollectionOverview />} />
                    <Route path={`:collectionId`} element={<CollectionPage />} />
                </Routes>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updatedCollection: collection => dispatch(UpdateCollections(collection)) 
})

export default connect(null, mapDispatchToProps)(ShopPage);