// BlurModalThree.js
import React from 'react';
import './BlurModal.css';
import AmoCRMformThree from "./AmoCRMformThree"; // Ensure to create and style appropriately

const BlurModalThree = ({ isOpen, close }) => {
    return (
        <div className={`blur-modal ${isOpen ? 'open' : ''}`} onClick={close}>
            <div className="blur-modal-content-form-three" onClick={e => e.stopPropagation()}>
                <AmoCRMformThree open={isOpen} />
            </div>
        </div>
    );
};

export default BlurModalThree;
