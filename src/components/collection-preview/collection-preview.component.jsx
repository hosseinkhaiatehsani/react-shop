import React from "react";

import './collection-preview.styles.scss';

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h2 className="title">{ title.toUpperCase() }</h2>
            <div className="collection-items">
                {
                    items.filter((item , indx) => indx < 4).map( (item) => 
                        // <div key={item.id}>{ item.name }</div>
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    )
}

export default CollectionPreview;