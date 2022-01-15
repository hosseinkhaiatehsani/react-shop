import React from "react";

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
    return(
        <div className="cart-item">
            <img src={imageUrl} alt={name} className="cart-item-image"/>
            <div className="cart-item-details">
                <span className="cart-item-name">{name}</span>
                <span className="cart-item-price">
                 {quantity} X ${price}
                </span>
            </div>
        </div>
    );
}

export default CartItem;