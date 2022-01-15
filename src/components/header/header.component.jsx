import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import './header.styles.scss';

// const signOut = () =>{
//     auth.signOut();
// }

const Header = ({ currentUser, hidden }) => {
    return (
        <header className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <nav className="nav-menu">
                <Link to="/shop" className="nav-item">
                    SHOP
                </Link>
                <Link to="/contact" className="nav-item">
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className="nav-item" onClick={() => auth.signOut()}>SIGNOUT</div>
                    :
                    <Link to="/signin" className="nav-item">
                        SIGNIN
                    </Link>
                }
                <CartIcon />
                {/* {
                    currentUser ? <CartIcon /> : null
                } */}
            </nav>
            {
                hidden ? null :
                <CartDropdown />
            }
        </header>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
