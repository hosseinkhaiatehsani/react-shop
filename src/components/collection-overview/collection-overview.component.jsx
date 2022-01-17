import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {
            collections.map( ({ id, ...otherProps }) => 
                <CollectionPreview key={id} {...otherProps} />    
            )
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionPreview
});

export default connect(mapStateToProps)(CollectionOverview);