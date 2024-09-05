import React from 'react';
import './ApplySection.css';
import applyImage from '../../assets/applysection/apply.jpg';
import AmoCRMformOne from "../../modal/AmoCRMformOne";

function ApplySection() {
    return (
        <div className="apply-section" style={{ backgroundImage: `url(${applyImage})` }}>
            <div className="apply-content">
                <h1 className="apply-header">Наш уникальный метод</h1>
                <p className="apply-description">
                    Наш уникальный метод, разработанный опытными специалистами, объединяет лечебную физкультуру, занятия на батуте и рекомендации по питанию, чтобы помочь детям с сенсорными, поведенческими и другими проблемами.
                </p>
                {/* Replace the custom form with the AmoCRM form */}
                <AmoCRMformOne />
            </div>
        </div>
    );
}

export default ApplySection;
