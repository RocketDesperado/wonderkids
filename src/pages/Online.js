// src/pages/Online.js

import React, {useState} from 'react';
import onlineImage from "../assets/onlinesection/online_img.png";
import FancyButton from "../button/FancyButton";
import AnimatedModal from "../modal/AnimatedModal";

const Online = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="offline-section">
            {/* Header Section */}
            <div className="offline-header">
                <div className="offline-main-text" style={{marginBottom: "30px"}}>Онлайн-обучение для родителей</div>
                <div className="offline-sub-text">
                    Расстояние - не помеха!
                </div>
            </div>

            {/* Split Section */}
            <div className="offline-content" style={{backgroundColor: "rgb(241,206,144)"}}>
                <div className="offline-text" style={{ backgroundColor: "rgb(241,206,144)" }}>
                    <p>Для тех, кто не может приехать на офлайн занятия мы разработали онлайн-курс для самостоятельной работы с ребёнком в домашних условиях.</p>

                        <p>Наша онлайн-система курсов предлагает практические инструменты, которые помогут вам и вашему ребенку достичь прогресса в комфортной домашней обстановке.</p>
                    <ul>
                        <li>Правильное питание</li>
                        <li>Развитие ключевых навыков</li>
                        <li>Поддержка родителей</li>
                    </ul>
                    <div className="button-container-offline">
                        <FancyButton label="ЗАПИСАТЬСЯ" onClick={openModal} />
                    </div>
                </div>
                <div className="offline-image">
                    <img src={onlineImage} alt="Online Training" />
                </div>
            </div>

            <div className="advantages-container">
                <div className="advantages-header">
                    Преимущества:
                </div>
                <div className="advantages-content">
                    <div className="advantages-grid">
                        {[1, 2, 3, 4, 5].map((number) => (
                            <div key={number} className="advantage-item">
                                <div className="advantage-number">{number}</div>
                                <div className="advantage-text">
                                    <h3 className="advantage-title">{titles[number - 1]}</h3>
                                    <p className="advantage-description">{descriptions[number - 1]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AnimatedModal open={modalOpen} onClose={closeModal} />
        </div>
    );
};

const titles = [
    'Удобство',
    'Визуальная поддержка',
    'Повторяемость',
    'Увеличение семейного взаимодействия',
    'Экономия'
];

const descriptions = [
    'Возможность заниматься в любое удобное время в привычной для ребенка обстановке.',
    'Наглядные видео-уроки и демонстрации.',
    'Возможность пересматривать уроки и выполнять упражнения несколько раз.',
    'Совместные занятия укрепляют связь между родителями и ребенком.',
    'Экономия времени на дорогу и финансовая выгода',
];

export default Online;
