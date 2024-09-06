import React from 'react';
import './AddressContact.css'; // Import the custom CSS

function AddressContact() {
    return (
        <div className="address-contact-container">
            <h2 className="address-contact-header">Адрес и контакты</h2>
            <div className="address-contact-content">
                <div className="address-contact-map">
                    {/* Embedding Yandex Map */}

                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=27.695989%2C53.956833&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY4OTU4MhI_0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0KPRgNGD0YbQutCw0Y8g0LLRg9C70ZbRhtCwLCAyM9CQIgoNhpDdQRUB1FdC&z=17.92"
                        width="100%"
                        height="500px"
                        allowFullScreen={true}
                    ></iframe>

                </div>
                <span className="address-contact-info">
                    <p><span className="info-title">Телефон:</span> <a href="tel:+375291242517" className="info-phone">+375291242517</a></p>
                    <p><span className="info-title">Адрес: Минск, улица Уручская 23А</span></p>
                </span>
            </div>
        </div>
    );
}

export default AddressContact;
