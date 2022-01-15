import React from "react";

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleBtn, inverted, ...otherButtonProps }) => {
    return (
        <button 
        className={`${inverted ? 'inverted' : ''} 
        ${isGoogleBtn ? 'google-signin-btn' : ''}
         custom-button`}
         {...otherButtonProps}>
            {children}
        </button>
    )
}

export default CustomButton;