import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as Cart } from '../../assets/cart-icon.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount, toggleCartHidden }) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Cart className="cart-icon-logo"/>
            <span className="item-count">{itemCount}</span>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);