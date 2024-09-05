// src/Trust.js

import React from 'react';
import './Trust.css'; // Import the CSS file for styling

// Importing images
import img1 from '../../assets/trustsection/img1.svg';
import img2 from '../../assets/trustsection/img2.svg';
import img3 from '../../assets/trustsection/img3.svg';

function Trust() {
    return (
        <div className="trust-section">
            <h2 className="trust-header">Почему нам доверяют</h2>
            <div className="trust-description">
                <div className="trust-item">
                    <img src={img1} alt="Интегративный метод" className="trust-image" />
                    <h3 className="trust-title">Интегративный метод</h3>
                    <p className="trust-text">
                        Мы объединяем авторские наработки, уровневые подходы, нейропсихологию, игровые практики и теорию сенсорной интеграции.
                    </p>
                </div>
                <div className="trust-item">
                    <img src={img2} alt="Индивидуальный подход" className="trust-image" />
                    <h3 className="trust-title">Индивидуальный подход</h3>
                    <p className="trust-text">
                        Занятия проводятся индивидуально с тренером, что позволяет адаптировать программу под потребности каждого ребёнка.
                    </p>
                </div>
                <div className="trust-item">
                    <img src={img3} alt="Глубинное воздействие" className="trust-image" />
                    <h3 className="trust-title">Глубинное воздействие</h3>
                    <p className="trust-text">
                        Наша методика воздействует на мозг и нервную систему, способствуя развитию навыков и умений у детей.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Trust;
