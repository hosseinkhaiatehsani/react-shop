import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsAsyncStart } from "../../redux/shop/shop.action";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import './shop-pages.styles.scss';


class ShopPage extends React.Component {
    componentDidMount = () => {
        const { collectionFetchingAsyncStart } = this.props;
        collectionFetchingAsyncStart();
    }

    render() {
        return(
            <div className="shop-page">
                <Routes>
                    <Route path='' element={<CollectionOverviewContainer />} />
                    <Route path={`:collectionId`} element={<CollectionPageContainer />} />
                </Routes>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    collectionFetchingAsyncStart: () => dispatch(fetchCollectionsAsyncStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);