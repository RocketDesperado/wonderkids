// src/Footer.js

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Footer() {
    return (
        <Box component="footer" style={{ padding: '20px 0', backgroundColor: '#f5f5f5' }}>
            <Container>
                <Typography variant="body1" align="center">
                    © 2024 Wonder Kids. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;