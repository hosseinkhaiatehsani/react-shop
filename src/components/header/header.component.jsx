import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from "../../firebase/firebase.utils";

import './header.styles.scss';

// const signOut = () =>{
//     auth.signOut();
// }

const Header = ({ currentUser }) => {
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
            </nav>
        </header>
    );
}

export default Header;
