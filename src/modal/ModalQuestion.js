import React, {useRef, useEffect, useState} from 'react';
import './ModalQuestion.css';
import img1 from '../assets/modalquestionsection/img1.jpg';
import {Box, Button, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";
import PhoneInput from "react-phone-number-input";
import {useTheme} from "@mui/material/styles";

const ModalQuestion = ({ onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const modalRef = useRef(null);

    // Close the modal if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, phone });
        onClose(); // Close modal after submission
    };

    return (
        <div className="modal-question-overlay">
            <div className="modal-question-content" ref={modalRef}>
                <img src={img1} alt="Modal Header" className="modal-image" />
                <DialogTitle className="modal-title">Не нашли что что искали?</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" className="modal-description">
                        Просто оставьте Ваш номер и мы поможем разобраться в любом вопросе
                    </Typography>
                    <TextField
                        label="Ваше Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        variant="outlined"
                        className="modal-field"
                        placeholder="Введите Ваше имя"
                    />
                    <PhoneInput
                        value={phone}
                        onChange={setPhone}
                        defaultCountry="BY" // Default to Belarus
                        className="phone-input"
                        international
                        placeholder="Введите номер телефона"
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20px', // Optional: move the margin here if you want
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            sx={{
                                borderRadius: '25px', // Ensure rounded edges
                                background: 'linear-gradient(135deg, #add8e6, #3EB489)', // Gradient background
                                color: 'white',
                                padding: '15px 30px',
                                fontWeight: 'bold',
                                '&:hover': {
                                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)', // Shadow on hover
                                    transform: 'translateY(-3px)', // Slight upward movement on hover
                                },
                            }}
                        >
                            Отправить
                        </Button>
                    </Box>
                </DialogContent>
            </div>
        </div>
    );
};

export default ModalQuestion;
