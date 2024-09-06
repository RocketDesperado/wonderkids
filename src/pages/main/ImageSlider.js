// src/ImageSlider.js

import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import './ImageSlider.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/image3.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image1.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import FancyButton from "../../button/FancyButton";
import TypingAnimation from './TypingAnimation';
import BlurModal from "../../modal/BlurModal"; // Import the typing animation component

const images = [image1, image2, image3, image4, image5];

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Function to handle button click
    const toReviewsButtonHandler = () => {
        navigate('/reviews'); // Redirect to the /online route
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div className="image-slider-container"> {/* Adjust height if needed */}
            <div className="slider">
                <div className="slider-wrapper">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className={currentIndex === index ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
            <Box className="text-overlay">
                <Box className="text-content">
                    <Typography variant="h4" component="div">
                        Ваш ребёнок
                    </Typography>
                    <TypingAnimation />
                    <div className="text-content-inner">
                        <Typography variant="h5" component="span">
                            Уникальная методика поможет
                        </Typography>
                        <Typography variant="h5" component="span" className="verb">
                            Запустить
                        </Typography>
                        <Typography variant="h5" component="span">
                            и
                        </Typography>
                        <Typography variant="h5" component="span" className="verb">
                            Развить
                        </Typography>
                        <Typography variant="h5" component="span">
                            речь,
                        </Typography>
                        <Typography variant="h5" component="span" className="verb">
                            Нормализовать
                        </Typography>
                        <Typography variant="h5" component="span">
                            поведение,
                        </Typography>
                        <Typography variant="h5" component="span" className="verb">
                            Избавиться
                        </Typography>
                        <Typography variant="h5" component="span">
                            от тревожности
                        </Typography>
                        <Typography variant="h5" component="span">
                            и истерик,
                        </Typography>
                        <Typography variant="h5" component="span" className="verb">
                            Справиться
                        </Typography>
                        <Typography variant="h5" component="span">
                            с трудностями в учёбе и поведении!
                        </Typography>
                        <Typography variant="h5" component="span">
                            Команда профессиональных нейротренеров в СНГ.
                        </Typography>
                    <Typography variant="h5" className="verb" gutterBottom>
                        Диагностика и занятия / Очно и онлайн
                    </Typography>
                    <Typography variant="h5" className="last-text-margin" gutterBottom>
                        Оставьте заявку на консультацию или напишите нам.
                    </Typography>
                    </div>
                </Box>
                <Box className="button-container">
                    <FancyButton color="red" label="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ" onClick={toggleModal} />
                    <FancyButton color="green" label="ОТЗЫВЫ" onClick={toReviewsButtonHandler} />
                </Box>
            </Box>
            <BlurModal isOpen={isModalOpen} close={() => setIsModalOpen(false)} />
        </div>
    );
}

export default ImageSlider;
