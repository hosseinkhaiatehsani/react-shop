import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionIsFetching, selectShopCollectionIsLoaded } from "../../redux/shop/shop.selector";
import { fetchCollectionsAsyncStart } from "../../redux/shop/shop.action";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import './shop-pages.styles.scss';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount = () => {
        const { collectionFetchingAsyncStart } = this.props;
        collectionFetchingAsyncStart();
    }

    render() {
        const { isCollectionFetching, isCollectionLoaded } = this.props;
        return(
            <div className="shop-page">
                <Routes>
                    <Route path='' element={<CollectionOverviewWithSpinner isLoading={isCollectionFetching} />} />
                    <Route path={`:collectionId`} element={<CollectionPageWithSpinner isLoading={!isCollectionLoaded} />} />
                </Routes>
            </div>
        );
    }

}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectShopCollectionIsFetching,
    isCollectionLoaded: selectShopCollectionIsLoaded
});

const mapDispatchToProps = dispatch => ({
    collectionFetchingAsyncStart: () => dispatch(fetchCollectionsAsyncStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);