import React from "react";
import { connect } from "react-redux";
import { addItem, clearItemFromCart, reduceItem } from "../../redux/cart/cart.action";

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, clearItem, addItem, reduceItem }) => {
    const {imageUrl, name, quantity, price} = item;
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
                    <span className="chevron" onClick={() => reduceItem(item)}>&#10094;</span>
                    <div>{quantity}</div>
                    <span className="chevron" onClick={() => addItem(item)}>&#10095;</span>
                </div>
            </div>
            <div className="checkout-item-block">
                <span className="item-price">${price}</span>
            </div>
            <div className="checkout-item-block">
                <span className="item-remove" onClick={() => clearItem(item)}>&#10005;</span>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    reduceItem: item => dispatch(reduceItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);