import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Online from './pages/Online';
import Offline from './pages/Offline';
import Consultation from './pages/Consultation';
import About from './pages/about/About';
import Reviews from './pages/reviews/Reviews';
import FAQ from './pages/FAQ';
import ImageSlider from './pages/main/ImageSlider';
import Footer from "./Footer";
import HelpSection from "./pages/main/HelpSection";
import JeopardComponent from "./pages/main/JeopardComponent";
import HowWeHelp from "./pages/main/HowWeHelp";
import FinalRedirectComponent from "./pages/main/FinalRedirectComponent";
import ScrollToTop from './ScrollToTop';
import ApplySection from "./pages/main/ApplySection";
import Trust from "./pages/main/Trust";
import ModalQuestion from "./modal/ModalQuestion";
import BlurModalThree from "./modal/BlurModalThree";
import BlurModal from "./modal/BlurModal";

const MainPage = () => {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let inactivityTimeout; // Declare the variable to store the timeout
        let hasShownModal = false; // Flag to track if the modal has been shown

        const resetInactivityTimeout = () => {
            clearTimeout(inactivityTimeout);

            // Only proceed if the modal hasn't been shown yet
            if (!hasShownModal) {
                inactivityTimeout = setTimeout(() => {
                    if (location.pathname === "/") {
                        setShowModal(true);
                        hasShownModal = true; // Set the flag to true once the modal is shown
                    }
                }, 60 * 1000); // 1 minute initial inactivity
            }
        };

        resetInactivityTimeout();

        const handleUserActivity = () => {
            if (location.pathname === "/") {
                resetInactivityTimeout();
            }
        };

        window.addEventListener('mousemove', handleUserActivity);
        window.addEventListener('keypress', handleUserActivity);

        return () => {
            clearTimeout(inactivityTimeout);
            window.removeEventListener('mousemove', handleUserActivity);
            window.removeEventListener('keypress', handleUserActivity);
        };
    }, [location]);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <ImageSlider />
            <HelpSection />
            <JeopardComponent/>
            <HowWeHelp/>
            <FinalRedirectComponent/>
            <Trust/>
            <ApplySection/>
            {showModal && <BlurModalThree isOpen={showModal} close={handleCloseModal} />}
        </>
    );
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/online" element={<Online />} />
                <Route path="/offline" element={<Offline />} />
                <Route path="/consultation" element={<Consultation />} />
                <Route path="/about" element={<About />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/faq" element={<FAQ />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
