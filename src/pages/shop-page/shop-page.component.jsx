import React from "react";
import { Routes, Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import './shop-pages.styles.scss';

const ShopPage = () => {
    return(
        <div className="shop-page">
            <Routes>
                <Route path='' element={<CollectionOverview />} />
                <Route path={`:collectionId`} element={<CollectionPage />} />
            </Routes>
        </div>
    )
}

export default ShopPage;