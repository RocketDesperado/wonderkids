// src/TypingAnimation.js

import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';
import {Typography} from "@mui/material"; // Import the CSS file for styling

const texts = [
    'тревожный',
    'быстро утомляется',
    'невнимательный',
    'плохо учится',
    'не разговаривает',
    // 'не ходит в туалет самостоятельно',
    // 'постоянно устраивает истерики',
    'с особенностями',
];

const TypingAnimation = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(75);

    useEffect(() => {
        let timer;

        const handleTyping = () => {
            const currentText = texts[currentTextIndex];

            if (isDeleting) {
                // Deleting characters
                setDisplayText((prev) => prev.slice(0, -1));
                setTypingSpeed(37); // Speed up deletion

                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                    setTypingSpeed(75); // Reset typing speed
                }
            } else {
                // Typing characters
                setDisplayText(currentText.slice(0, displayText.length + 1));

                if (displayText.length === currentText.length) {
                    // Full text is typed, pause before deleting
                    setTimeout(() => setIsDeleting(true), 3000); // Pause for 3 seconds
                }
            }
        };

        timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer); // Cleanup on component unmount
    }, [displayText, isDeleting, currentTextIndex, typingSpeed]);

    return (
        <div className="typing-animation">
            <Typography variant="h4" gutterBottom>
                {displayText}<span className="cursor">?</span>
            </Typography>
        </div>
    );
};

export default TypingAnimation;
