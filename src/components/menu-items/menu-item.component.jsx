import React from "react";

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
    return (
    <div style={{
        backgroundImage : `url(${imageUrl})`
    }} className={`${size} directory-item`}>
        <div className="content">
            <p className="title">{ title }</p>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
    );
}

export default MenuItem;