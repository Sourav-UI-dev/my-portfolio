import React from 'react';
import './Preloader.scss';

const Preloader: React.FC = () => {
    return (
        <div className="preloader-container">
            <div className="letters">
                <span className="letter letter-s">S</span>
                <span className="letter letter-g">G</span>
            </div>
            <div className="spinner"></div>
        </div>
    );
};

export default Preloader;
