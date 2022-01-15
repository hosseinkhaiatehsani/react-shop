import React from "react";
import { connect } from "react-redux";

import './cart-icon.styles.scss';

import { ReactComponent as Cart } from '../../assets/cart-icon.svg';
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartIcon = ({ toggleCartHidden }) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Cart className="cart-icon-logo"/>
            <span className="item-count">0</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);