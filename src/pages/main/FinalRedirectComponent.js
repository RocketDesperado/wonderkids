import React from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for React Router v6
import './FinalRedirectComponent.css';
import leftImage from '../../assets/finalredirectcomponentsection/left_image.png'; // Adjust path as needed
import rightImage from '../../assets/finalredirectcomponentsection/right_image.jpg'; // Adjust path as needed


const FinalRedirectComponent = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    // Function to handle button click
    const toOnlineButtonHandler = () => {
        navigate('/online'); // Redirect to the /online route
    };

    const toOfflineButtonHandler = () => {
        navigate('/offline'); // Redirect to the /online route
    };

    return (
        <div className="final-redirect-container">
            <div className="final-redirect-header">
                <h1 className="final-redirect-title">Мы предлагаем два формата занятий:</h1>
                <p className="final-redirect-description">
                    Выбирайте подходящий вариант и дайте своему ребенку возможность раскрыть свой потенциал!
                </p>
            </div>
            <div className="final-redirect-content">
                <div className="final-redirect-cell">
                    <img src={leftImage} alt="Left Side" className="final-redirect-image" />
                    <div className="final-redirect-text">
                        <h2 className="final-redirect-subtitle">ОФЛАЙН</h2>
                        <p className="final-redirect-paragraph">
                            Персональное внимание тренера, который разработает программу под вашего ребенка.
                        </p>
                        <button className="final-redirect-button" onClick={toOfflineButtonHandler}>узнать подробнее</button>
                    </div>
                </div>
                <div className="final-redirect-cell">
                    <div className="final-redirect-text">
                        <h2 className="final-redirect-subtitle">ОНЛАЙН</h2>
                        <p className="final-redirect-paragraph">
                            обучение для самостоятельных занятий с ребенком в домашних условиях.
                        </p>
                        <button className="final-redirect-button" onClick={toOnlineButtonHandler}>узнать подробнее</button>
                    </div>
                    <img src={rightImage} alt="Right Side" className="final-redirect-image" />
                </div>
            </div>
        </div>
    );
};

export default FinalRedirectComponent;
