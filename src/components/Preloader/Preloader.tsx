import React from 'react';
import './Preloader.scss';

const Preloader: React.FC = () => {
    return (
        <div className="preloader">
            <div className="spinner"></div>
        </div>
    );
};

export default Preloader;
