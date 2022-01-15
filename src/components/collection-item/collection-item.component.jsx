import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const {imageUrl, name, price} = item;
    return (
        <div className="collection-item">
            <div style={{
                backgroundImage: `url(${imageUrl})`
            }} className="background-image" />
            <div className="collection-item-footer">
                <div className="item-name">{name}</div>
                <div className="item-price">{price}</div>
            </div>
            <CustomButton inverted onClick={()=>addItem(item)}> Add to cart </CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);