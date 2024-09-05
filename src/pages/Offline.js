import React, {useState} from 'react';
import './Offline.css';
import offlineImage from '../assets/offlinesection/offline_img.png'; // Import the image
// Importing the images
import img1 from '../assets/offlinesection/img1.svg';
import img2 from '../assets/offlinesection/img2.svg';
import img3 from '../assets/offlinesection/img3.svg';
import img4 from '../assets/offlinesection/img4.svg';
import AnimatedModal from "../modal/AnimatedModal";
import FancyButton from "../button/FancyButton";

const Offline = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="offline-section">
            {/* Header Section */}
            <div className="offline-header">
                <div className="offline-main-text">Индивидуальные занятия с тренером</div>
                <div className="offline-main-text" style={{marginBottom: "30px"}}>в батутном парке</div>
                <div className="offline-sub-text">
                    Больше, чем просто тренировки!<br />
                    для деток от 2 до 15 лет
                </div>
            </div>

            {/* Split Section */}
            <div className="offline-content">
                <div className="offline-text">
                    <p><strong>Доверьтесь индивидуальному подходу!</strong></p>
                    <p>В рамках курса вы получите:</p>
                    <ul>
                        <li>Индивидуальные занятия: тренер будет рядом и уделять внимание только вашему ребенку.</li>
                        <li>Кураторство родителей и детей: мы создали закрытый чат для общения и поддержки, где вы сможете задать любые вопросы и получить ответы от наших специалистов.</li>
                        <li>"Обучающий курс" для родителей: пять недель интенсивных знаний о нутрициологии, психологии и дефектологии. Мы поможем вам разобраться в сложных вопросах метаболизма, нейровоспалении, физиологии и питании, чтобы вы могли принимать осознанные решения и заботиться о здоровье вашего ребенка.</li>
                    </ul>
                    <div className="button-container-offline">
                        <FancyButton label="ЗАПИСАТЬСЯ" onClick={openModal} />
                    </div>
                </div>
                <div className="offline-image">
                    <img src={offlineImage} alt="Offline Training" />
                </div>
            </div>

            <div className="offline-course-container">
                <div className="course-title">
                    Программа офлайн-курса
                </div>
                <div className="info-sections">
                    <div className="info-section">
                        <h2>Консультация</h2>
                        <p>Знакомство с ребенком, выявление его особенностей и потребностей.</p>
                        <img src={img1} alt="Консультация" />
                    </div>
                    <div className="info-section">
                        <h2>Разработка индивидуального плана занятий</h2>
                        <p>Определение уровня развития ребенка и составление персональной программы занятий.</p>
                        <img src={img2} alt="Разработка индивидуального плана занятий" />
                    </div>
                    <div className="info-section">
                        <h2>Проведение занятий с тренером,<br />онлайн-поддержка от специалистов</h2>
                        <p>Регулярные занятия с тренером, развитие навыков и умений, корректировка программы при необходимости.</p>
                        <img src={img3} alt="Проведение занятий с тренером" />
                    </div>
                    <div className="info-section">
                        <h2>Рекомендации</h2>
                        <p>Выдача рекомендаций для дальнейшей работы и поддержки развития ребёнка.</p>
                        <img src={img4} alt="Рекомендации" />
                    </div>
                </div>
            </div>

            <div className="advantages-container">
                <div className="advantages-header">
                    Преимущества:
                </div>
                <div className="advantages-content">
                    <div className="advantages-grid">
                        {[1, 2, 3, 4, 5, 6].map((number) => (
                            <div key={number} className="advantage-item">
                                <div className="advantage-number">{number}</div>
                                <div className="advantage-text">
                                    <h3 className="advantage-title">{titles[number - 1]}</h3>
                                    <p className="advantage-description">{descriptions[number - 1]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AnimatedModal open={modalOpen} onClose={closeModal} />
        </div>
    );
};

const titles = [
    'Эффективность',
    'Безопасность',
    'Разнообразие',
    'Мотивация и социализация',
    'Настроение',
    'Онлайн-сопровождение',
];

const descriptions = [
    'Тренер может адаптировать упражнения под особенности ребенка, учитывая его уровень развития и потребности.',
    'Под руководством тренера ребенок может безопасно изучать новые ощущения и движения.',
    'Батутный парк предоставляет богатую среду для стимулирования различных сенсорных систем (зрение, слух, осязание, вестибулярная система).',
    'Занятия в батутном парке превращаются в увлекательную игру, что повышает мотивацию ребенка к тренировкам, а благодаря занятиям с тренером ребенок еще и социализируется — он меньше начинает пугаться незнакомых людей.',
    'Физическая активность и позитивные эмоции, получаемые от занятий, улучшают настроение и самочувствие ребенка.',
    'Помогаем разобраться в организме ребенка, развитии и возможных проблемах. Получите ответы на сложные вопросы и будете принимайте осознанные решения, заботясь о здоровье своего ребенка.',
];

export default Offline;
