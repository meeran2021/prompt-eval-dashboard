import React, { useState } from 'react';

function RatingFrame({ frameTitle, frameDesc }) {
    const [activeLink, setActiveLink] = useState('');

    const handleClick = (id) => {
        // Check if the clicked button is already active
        if (activeLink !== id) {
            setActiveLink(id);
        }
    };

    return (
        <div className="Frame-border">
            <div className='Frame-title'>{frameTitle}</div>
            <div className='Frame-description'>{frameDesc}</div>
            <div className='Rating-bars'>
                <div
                    className={`Btn-rating ${activeLink === 'Btn-rating-1' ? 'active' : ''}`}
                    id="Btn-rating-1"
                    onClick={() => handleClick('Btn-rating-1')}
                >
                    1
                </div>
                <div
                    className={`Btn-rating ${activeLink === 'Btn-rating-2' ? 'active' : ''}`}
                    id="Btn-rating-2"
                    onClick={() => handleClick('Btn-rating-2')}
                >
                    2
                </div>
                <div
                    className={`Btn-rating ${activeLink === 'Btn-rating-3' ? 'active' : ''}`}
                    id="Btn-rating-3"
                    onClick={() => handleClick('Btn-rating-3')}
                >
                    3
                </div>
                <div
                    className={`Btn-rating ${activeLink === 'Btn-rating-4' ? 'active' : ''}`}
                    id="Btn-rating-4"
                    onClick={() => handleClick('Btn-rating-4')}
                >
                    4
                </div>
                <div
                    className={`Btn-rating ${activeLink === 'Btn-rating-5' ? 'active' : ''}`}
                    id="Btn-rating-5"
                    onClick={() => handleClick('Btn-rating-5')}
                >
                    5
                </div>
            </div>
        </div>
    );
}

export default RatingFrame;
