import React from "react";

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h2 className="title">{ title.toUpperCase() }</h2>
            <div className="collection-items">
                {
                    items.filter((item , indx) => indx < 4).map( (item) => 
                        <div key={item.id}>{ item.name }</div> 
                    )
                }
            </div>
        </div>
    )
}

export default CollectionPreview;