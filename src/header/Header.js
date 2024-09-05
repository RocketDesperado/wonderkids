import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import FancyButton from '../button/FancyButton';
import DropdownMenu from './DropdownMenu';
import logo from '../assets/logo.png';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TelegramIcon from '../assets/telegram.svg';
import WhatsAppIcon from '../assets/whatsapp.svg';
import ViberIcon from '../assets/viber.svg';
import { Box } from "@mui/material";
import BlurModal from "../modal/BlurModal";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogoClick = (event) => {
        event.preventDefault(); // Prevent the default Link behavior
        if (window.location.pathname === '/') {
            window.location.reload(); // Reload the page if already on the home page
        } else {
            window.location.href = '/'; // Navigate to home if not already there
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-info">
                    <Link to="/" className="logo-link" onClick={handleLogoClick}>
                        <img src={logo} alt="Special Kids Logo" className="logo-image" />
                    </Link>
                </div>

                {/* Mobile menu */}
                {isMobile && menuOpen && (
                    <nav className="mobile-menu">
                        <DropdownMenu
                            title="Занятия"
                            items={[
                                { label: 'Онлайн', link: '/online' },
                                { label: 'Офлайн в батутных парках', link: '/offline' }
                            ]}
                            hasDropdown={true}
                        />
                        <DropdownMenu
                            title="О нас"
                            items={[
                                { label: 'О нас', link: '/about' }
                            ]}
                            hasDropdown={false}
                        />
                        <DropdownMenu
                            title="Отзывы"
                            items={[
                                { label: 'Отзывы', link: '/reviews' }
                            ]}
                            hasDropdown={false}
                        />
                        <DropdownMenu
                            title="FAQ"
                            items={[
                                { label: 'FAQ', link: '/faq' }
                            ]}
                            hasDropdown={false}
                        />
                    </nav>
                )}

                {/* Regular menu */}
                {!isMobile && (
                    <nav className="header-menu">
                        <DropdownMenu
                            title="Занятия"
                            items={[
                                { label: 'Онлайн', link: '/online' },
                                { label: 'Офлайн в батутных парках', link: '/offline' }
                            ]}
                            hasDropdown={true}
                        />
                        <DropdownMenu
                            title="О нас"
                            items={[
                                { label: 'О нас', link: '/about' }
                            ]}
                            hasDropdown={false}
                        />
                        <DropdownMenu
                            title="Отзывы"
                            items={[
                                { label: 'Отзывы', link: '/reviews' }
                            ]}
                            hasDropdown={false}
                        />
                        <DropdownMenu
                            title="FAQ"
                            items={[
                                { label: 'FAQ', link: '/faq' }
                            ]}
                            hasDropdown={false}
                        />
                    </nav>
                )}
                <div className="header-address">
                    <a href="tel:+375291242517" className="phone-number" >
                        +375 (29) 124-25-17
                    </a>
                </div>
                <div className={`header-buttons ${menuOpen ? 'hidden' : ''}`}>
                    <Box className="button-container">
                        <FancyButton label="ЗАПИСАТЬСЯ" onClick={toggleModal} />
                        <BlurModal isOpen={isModalOpen} close={() => setIsModalOpen(false)} />
                    </Box>
                    <div className="social-buttons">
                        <IconButton aria-label="Telegram" href="https://telegram.org" target="_blank">
                            <img src={TelegramIcon} alt="Telegram" style={{ width: '41px', height: '41px' }} />
                        </IconButton>
                        <IconButton aria-label="Viber" href="https://viber.com" target="_blank">
                            <img src={ViberIcon} alt="Viber" style={{ width: '40px', height: '40px' }} />
                        </IconButton>
                        <IconButton aria-label="WhatsApp" href="https://whatsapp.com" target="_blank">
                            <img src={WhatsAppIcon} alt="WhatsApp" style={{ width: '58px', height: '58px' }} />
                        </IconButton>
                    </div>
                </div>

                {isMobile && (
                    <IconButton className="menu-toggle" onClick={toggleMenu}>
                        {menuOpen ? <CloseIcon/> : <MenuIcon/>}
                    </IconButton>
                )}
            </div>
        </header>
    );
}

export default Header;
