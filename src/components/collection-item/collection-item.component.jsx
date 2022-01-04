import React from "react";

import './collection-item.styles.scss';

const CollectionItem = ({ imageUrl, name, price }) => {
    return (
        <div className="collection-item">
            <div style={{
                backgroundImage: `url(${imageUrl})`
            }} className="background-image" />
            <div className="collection-item-footer">
                <div className="item-name">{name}</div>
                <div className="item-price">{price}</div>
            </div>

        </div>
    );
}

export default CollectionItem;