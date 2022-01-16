import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import './shop-pages.styles.scss';

const ShopPage = () => {
    const match = useLocation();
    return(
        <div className="shop-page">
            <Routes>
                <Route path={match.pathname} element={<CollectionOverview />} />
                <Route path={`:collectionId`} element={<CollectionPage />} />
            </Routes>
        </div>
    )
}

export default ShopPage;