import React from "react";
import { Routes, Route } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { onSnapshot } from "firebase/firestore";
import { converCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { UpdateCollections } from "../../redux/shop/shop.action";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import './shop-pages.styles.scss';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount = async () => {
        const { updatedCollection } = this.props;
        const db = getFirestore();
        const collectionRef = collection(db, 'collections');

        // this.unsubscribeFromSnapshot = onSnapshot(collectionRef, (snapshot) => {
        //     const collectionsMap = converCollectionSnapshotToMap(snapshot);
        //     updatedCollection(collectionsMap);
        //     this.setState({loading: false});
        // })


        // another method to get data just need to make function async
        // and import getDocs
        const querySnapshot = await getDocs(collectionRef);
        const collectionsMap = converCollectionSnapshotToMap(querySnapshot);
        updatedCollection(collectionsMap);
        this.setState({loading: false});

    }

    render() {
        const { loading } = this.state;
        return(
            <div className="shop-page">
                <Routes>
                    <Route path='' element={<CollectionOverviewWithSpinner isLoading={loading} />} />
                    <Route path={`:collectionId`} element={<CollectionPageWithSpinner isLoading={loading} />} />
                </Routes>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updatedCollection: collection => dispatch(UpdateCollections(collection)) 
})

export default connect(null, mapDispatchToProps)(ShopPage);