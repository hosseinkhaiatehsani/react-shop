import React from "react";

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleBtn, ...otherButtonProps }) => {
    return (
        <button className={`${isGoogleBtn ? 'google-signin-btn' : ''} custom-button`}
         {...otherButtonProps}>
            {children}
        </button>
    )
}

export default CustomButton;