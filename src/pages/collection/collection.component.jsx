import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selector";

import './collection.styles.scss';

const CollectionPage = () => {
    const params = useParams();
    const collection = useSelector( (state) => selectCollection(params.collectionId)(state) )
    console.log(collection)
    return(
        <div className="collection-page">
            COLLECTION PAGE
        </div>
    )
}

export default CollectionPage;