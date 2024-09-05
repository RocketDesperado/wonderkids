import React from 'react';
import './JeopardComponent.css'; // Import the CSS file for text styling
import jeopardImg from '../../assets/jeopardsection/jeopard.svg'; // Import the SVG image

function JeopardComponent() {
    return (
        <div
            className="jeopard-background-container"
            style={{ backgroundImage: `url(${jeopardImg})` }} // Set the background image inline
        >
            <div className="jeopard-text-overlay">
                Мы помогаем детям с сенсорными, поведенческими и пищевыми проблемами, используя интегративную методику, включающую ЛФК, батуты и советы по питанию. Наша цель — улучшить физическое и психическое состояние ребёнка через развитие навыков и умений, воздействуя на мозг и нервную систему.
            </div>
        </div>
    );
}

export default JeopardComponent;