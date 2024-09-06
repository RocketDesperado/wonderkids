// src/AboutSection.js

import React from 'react';
import './About.css';
import img1 from '../../assets/aboutussection/img1.png';
import GallerySection from "./GallerySection";
import AddressContact from "./AddressContact"; // Adjust the path as needed

const About = () => {
    return (
        <div className="about-section">
            <div className="about-inner">
                <div className="about-image">
                    <img src={img1} alt="About Us" />
                </div>
                <div className="about-text">
                    <h1 className="about-header">О НАС</h1>
                    <div className="fancy-line"></div>
                    <p className="about-description">
                        <strong>В 2018 году в Москве родилась компания Wonder Kids (“Чудо Детки ”)</strong> — команда специалистов, объединившихся с одной целью: сделать мир детей ярче и счастливее.<br /><br />
                        Видя потребность родителей в поддержке своих особенных детей, мы создали <strong>уникальную методику</strong>, направленную на преодоление речевых нарушений, тревожности, невнимательности и других трудностей, с которыми сталкиваются дети.<br /><br />
                        За 6 лет работы, мы помогли тысячам детей и их родителям в России, проведя сотни курсов в крупных городах от Москвы, Санкт-Петербурга до Новосибирска и Краснодара.<br /><br />
                        Теперь мы с радостью выходим на белорусский рынок, предлагая свой проверенный метод, который станет настоящим чудом для детей и их семей. Мы получили множество запросов от родителей, которые ждали нас, и мы едем к вам!<br /><br />
                        Встречайте <strong>Wonder Kids в Беларуси</strong> уже в октябре 2024 года!
                    </p>
                </div>
            </div>
            <GallerySection/>
            <AddressContact/>
        </div>
    );
};

export default About;
