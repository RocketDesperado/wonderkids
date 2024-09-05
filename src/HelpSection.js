import React from 'react';
import './HelpSection.css'; // Import the CSS file for styling

// Import the images (ensure the paths are correct)
import img1 from './assets/helpsection/img1.png';
import img2 from './assets/helpsection/img2.png';
import img3 from './assets/helpsection/img3.png';
import img4 from './assets/helpsection/img4.png';
import img5 from './assets/helpsection/img5.png';
import img6 from './assets/helpsection/img6.png';

const HelpSection = () => {
    return (
        <div className="help-section">
            <div className="titleH">Кому мы помогаем</div>
            <div className="help-grid">
                <div className="help-item text">
                    <h3>Ваш ребенок не разговаривает?</h3>
                    <ul>
                        <li>Вашему ребенку 3 года и он еще не начал говорить.</li>
                        <li>Издает "свои" звуки, но не выговаривает слова.</li>
                        <li>Говорит отдельные взятые слова, но не может построить предложение.</li>
                    </ul>
                </div>
                <div className="help-item image">
                    <img src={img1} alt="Child not speaking" />
                </div>
                <div className="help-item text">
                    <h3>Ваш ребенок не ходит в туалет самостоятельно?</h3>
                    <ul>
                        <li>Вашему ребенку 4 года и он не просится в туалет.</li>
                        <li>Ему уже 6 лет, а он так не ходит в туалет самостоятельно и просит помощи.</li>
                        <li>Ваш ребенок не контролирует позывы посещения туалета в общественных местах.</li>
                    </ul>
                </div>
                <div className="help-item image">
                    <img src={img2} alt="Child not toilet trained" />
                </div>

                <div className="help-item image">
                    <img src={img3} alt="Child throws tantrums" />
                </div>
                <div className="help-item text">
                    <h3>Ваш ребенок постоянно устраивает истерики?</h3>
                    <ul>
                        <li>Постоянная раздражительность.</li>
                        <li>Форменное не прошедшее каприз.</li>
                        <li>Нанесение вреда себе или окружающим.</li>
                    </ul>
                </div>
                <div className="help-item image">
                    <img src={img4} alt="Child is anxious" />
                </div>
                <div className="help-item text">
                    <h3>Ваш ребенок тревожный?</h3>
                    <ul>
                        <li>Ребенок не может расслабиться, спокойно уснуть и крепко спать.</li>
                        <li>Постоянно плачет, находится в тревожном состоянии.</li>
                        <li>Принимает неуверенные и утомительные позы.</li>
                    </ul>
                </div>

                <div className="help-item text">
                    <h3>Ваш ребенок быстро устает?</h3>
                    <ul>
                        <li>Ребенок "вялый" и просыпается уже уставшим.</li>
                        <li>Постоянно ленится и ничего не хочет делать.</li>
                        <li>Апатичен ко всему происходящему.</li>
                    </ul>
                </div>
                <div className="help-item image">
                    <img src={img5} alt="Child is fatigued" />
                </div>
                <div className="help-item text">
                    <h3>Ваш ребенок с особенностями?</h3>
                    <ul>
                        <li>Есть установленный диагноз.</li>
                        <li>Нет никакой динамики.</li>
                        <li>Не знаете, что с этим делать.</li>
                        <li>Опускаются руки.</li>
                    </ul>
                </div>
                <div className="help-item image">
                    <img src={img6} alt="Child with special needs" />
                </div>
            </div>
        </div>
    );
};

export default HelpSection;
