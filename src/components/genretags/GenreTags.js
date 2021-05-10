import React from 'react';
import './GenreTags.css';

const GenreTags = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize 
}) => {
    return (
        <div className="genretag__container">
            <button className="genretag__btn" onClick={onClick} type={type}>
                {children}
            </button>
        </div>
    )
}

export default GenreTags;
