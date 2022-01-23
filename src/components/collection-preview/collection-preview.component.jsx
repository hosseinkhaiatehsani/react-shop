import React from "react";

import './collection-preview.styles.scss';

import CollectionItem from "../collection-item/collection-item.component";
import { useNavigate } from "react-router-dom";

const CollectionPreview = ({ title, routeName, items }) => {
    const navigate = useNavigate();
    return (
        <div className="collection-preview">
            <h2 className="title" data-route={routeName} onClick={() => navigate(`${routeName}`)}>
                <span className="title-text">{ title.toUpperCase() }</span>
            </h2>
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