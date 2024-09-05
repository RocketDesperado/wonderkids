// BlurModal.js
import React from 'react';
import AmoCRMformTwo from './AmoCRMformTwo';
import './BlurModal.css'; // Ensure to create and style appropriately

const BlurModal = ({ isOpen, close }) => {
    return (
        <div className={`blur-modal ${isOpen ? 'open' : ''}`} onClick={close}>
            <div className="blur-modal-content" onClick={e => e.stopPropagation()}>
                <AmoCRMformTwo open={isOpen} />
            </div>
        </div>
    );
};

export default BlurModal;
