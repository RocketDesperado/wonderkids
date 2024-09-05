import React, { useEffect, useRef } from 'react';
import './AmoCRMformTwo.css'; // Ensure this file imports the modal styling

const AmoCRMformTwo = ({ isVisible }) => {
    const formContainerRef = useRef(null);

    useEffect(() => {
        if (!isVisible) return;

        const script = document.createElement('script');
        // Script details remain the same
        // Append script logic remains the same

        return () => {
            // Cleanup logic remains the same
        };
    }, [isVisible]);

    return (
        <div ref={formContainerRef} id="amocrm-form-container-two"
             className={`amo-crm-modal ${isVisible ? 'visible' : ''}`}>
            {/* Script content will be injected here */}
        </div>
    );
};

export default AmoCRMformTwo;
