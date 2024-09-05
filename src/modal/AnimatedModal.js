import React, { useState } from 'react';
import { Box, Button, Dialog, DialogContent, DialogTitle, MenuItem, Slide, TextField, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { useTheme } from '@mui/material/styles';
import PhoneInput from "react-phone-number-input";
import './AnimatedModal.css'; // Import the CSS file for styling
import 'react-phone-number-input/style.css';

// Transition component for the modal
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} timeout={{ enter: 600, exit: 600 }} />;
});

function AnimatedModal({ open, onClose }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [question, setQuestion] = useState('');
    const theme = useTheme();

    const handleSubmit = () => {
        console.log({ name, phone, question });
        onClose(); // Close modal after submission
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            TransitionComponent={Transition}
            keepMounted
            PaperProps={{
                style: {
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: '8px',
                    padding: '30px',
                    boxShadow: theme.shadows[55],
                },
            }}
        >
            <DialogTitle className="modal-title">Запись на консультацию</DialogTitle>
            <DialogContent>
                <Typography variant="body1" className="modal-description">
                    Оставьте свои контактные данные и мы свяжемся с Вами в ближайшее время.
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
                <TextField
                    label="Ваш вопрос"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    fullWidth
                    variant="outlined"
                    className="modal-field"
                    placeholder="Введите Ваш вопрос"
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
        </Dialog>
    );
}

export default AnimatedModal;
