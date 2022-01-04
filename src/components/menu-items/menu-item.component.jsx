import React from "react";
import { useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();
    return (
    <div className={`${size} directory-item`} onClick={() => navigate(`${linkUrl}`)}>
        <div className="background-image"  style={{
            backgroundImage : `url(${imageUrl})`
        }} />
        <div className="content">
            <p className="title">{ title.toUpperCase() }</p>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
    );
}

export default MenuItem;