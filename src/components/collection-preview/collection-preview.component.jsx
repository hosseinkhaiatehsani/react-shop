import React from "react";

import './collection-preview.styles.scss';

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h2 className="title">{ title.toUpperCase() }</h2>
            <div className="collection-items">
                {
                    items.filter((item , indx) => indx < 4).map( ({ id, ...otherItemsProps}) => 
                        // <div key={item.id}>{ item.name }</div>
                        <CollectionItem key={id} {...otherItemsProps} />
                    )
                }
            </div>
        </div>
    )
}

export default CollectionPreview;