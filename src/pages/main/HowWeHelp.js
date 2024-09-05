import React from 'react';
import './HowWeHelp.css'; // Import the CSS file for styling

// Import the images (ensure the paths are correct)
import img1 from '../../assets/howwehelpsection/img1.png';
import img2 from '../../assets/howwehelpsection/img2.png';
import img3 from '../../assets/howwehelpsection/img3.png';
import img4 from '../../assets/howwehelpsection/img4.png';
import img5 from '../../assets/howwehelpsection/img5.png';

const HowWeHelp = () => {
    return (
        <div className="how-help-section">
            <div className="how-titleH">Как мы помогаем</div>
            <div className="how-help-grid">
                <div className="how-help-item text">
                    <h3>Мозжечковая стимуляция</h3>
                    <h4>Развитие связь между сенсорным восприятием и движениями тела, а также развитие речи</h4>
                </div>
                <div className="how-help-item image">
                    <img src={img1} alt="Child not speaking" />
                </div>
                <div className="how-help-item text">
                    <h3>Сенсорная интеграция</h3>
                    <h4>Развитие восприятия и взаимодействия с окружающей средой.</h4>
                </div>
                <div className="how-help-item image">
                    <img src={img2} alt="Child not toilet trained" />
                </div>

                <div className="how-help-item image">
                    <img src={img3} alt="Child throws tantrums" />
                </div>
                <div className="how-help-item text">
                    <h3>Вестибулярная коррекция</h3>
                    <h4>Развитие координации, равновесия и вестибулярного аппарата.</h4>
                </div>
                <div className="how-help-item image">
                    <img src={img4} alt="Child is anxious" />
                </div>
                <div className="how-help-item text">
                    <h3>Эмоционально-волевая коррекция</h3>
                    <h4>Снижение гиперактивности, улучшение самоконтроля и эмоционально-волевой сферы.</h4>
                </div>

                <div className="how-help-item text">
                    <h3>Нейрокоррекция</h3>
                    <h4>Умение обучаться, развиваться и уметь управлять поведением.</h4>
                </div>
                <div className="how-help-item image">
                    <img src={img5} alt="Child is fatigued" />
                </div>
            </div>
        </div>
    );
};

export default HowWeHelp;
