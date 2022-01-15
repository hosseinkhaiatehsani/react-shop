import React from "react";

import './checkout-item.styles.scss';

const CheckoutItem = ({ item: {imageUrl, name, quantity, price} }) => {
    return(
        <div className="checkout-item">
            <div className="checkout-item-block">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="checkout-item-block">
                <span className="item-name">{name}</span>
            </div>
            <div className="checkout-item-block">
                <div className="item-quantity">
                    <span className="chevron">&#10094;</span>
                    <div>{quantity}</div>
                    <span className="chevron">&#10095;</span>
                </div>
            </div>
            <div className="checkout-item-block">
                <span className="item-price">${price}</span>
            </div>
            <div className="checkout-item-block">
                <span className="item-remove">&#10005;</span>
            </div>
        </div>
    );
}

export default CheckoutItem;