// src/FancyButton.js

import React from 'react';
import './FancyButton.css';

function FancyButton({ label, color, onClick }) {
    return (
        <button
            className={`fancy-button ${color}`}
            onClick={onClick}
        >
            <span className="button-label">{label}</span>
        </button>
    );
}

export default FancyButton;
