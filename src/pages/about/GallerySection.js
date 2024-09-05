// src/GallerySection.js

import React, { useState } from 'react';
import './GallerySection.css'; // Import the CSS file for styling
import img3 from '../../assets/gallerysection/img3.jpg'; // Corrected path
import img4 from '../../assets/gallerysection/img4.png'; // Corrected path
import img5 from '../../assets/gallerysection/img5.png'; // Corrected path
import img6 from '../../assets/gallerysection/img6.png'; // Corrected path

function GallerySection() {
    const [selectedImage, setSelectedImage] = useState(img3);

    const images = [img3, img4, img5, img6];

    return (
        <div className="gallery-section">
            <div className="gallery-inner">
                <div className="gallery-content">
                    <div className="big-image-container">
                        <img src={selectedImage} alt="Selected" className="big-image" />
                    </div>
                    <div className="small-images-container">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className={`small-image ${selectedImage === img ? 'selected' : ''}`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </div>
                <div className="gallery-text">
                    <h2 className="gallery-header">Wonder Kids:</h2>
                    <p className="gallery-description">
                        В каждом ребенке живет герой!<br /><br />
                        Каждый ребенок уникален, и его нейроразвитие происходит в своем темпе. Иногда, мозговые центры, отвечающие за речь, координацию и восприятие, нуждаются в дополнительной стимуляции для полного раскрытия своего потенциала.<br /><br />
                        Наша методика основана на игре и движении, которые стимулируют развитие нервной системы, укрепляя моторные навыки, улучшая координацию и пространственное восприятие.<br /><br />
                        Что дает движение ребенку?<br />
                        <ul>
                            <li>Укрепление мышц и улучшение координации: тело становится более гибким и подвижным, увереннее в пространстве.</li>
                            <li>Стимуляция нейрогенеза: новые движения активизируют формирование новых нейронных связей, что способствует развитию когнитивных функций.</li>
                            <li>Улучшение кровообращения и метаболизма: обеспечивает эффективное питание и очищение мозга, что необходимо для его нормального функционирования.</li>
                            <li>Гармонизация эмоций: физическая активность способствует выработке гормонов радости и уверенности, что положительно влияет на настроение и поведение ребенка.</li>
                        </ul>
                        <br />
                        <strong>Wonder Kids: Вместе с детьми, вместе с родителями.</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GallerySection;