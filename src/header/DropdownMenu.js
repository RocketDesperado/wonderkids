import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css'; // Import the CSS file for styling

function DropdownMenu({ title, items, hasDropdown }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`menu-item ${hasDropdown ? 'has-dropdown' : ''}`}
            onMouseEnter={() => hasDropdown && setIsOpen(true)}
            onMouseLeave={() => hasDropdown && setIsOpen(false)}
        >
            <div className="menu-link-container">
                {hasDropdown ? (
                    <span className="menu-link">
                        {title}
                        <span className={`triangle ${isOpen ? 'open' : ''}`}>&#9660;</span>
                    </span>
                ) : (
                    <Link to={items[0].link} className="menu-link">
                        {title}
                    </Link>
                )}
            </div>
            {isOpen && hasDropdown && (
                <div className="dropdown-menu">
                    {items.map((item, index) => (
                        <Link key={index} to={item.link} className="dropdown-item">
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
