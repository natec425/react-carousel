import React from 'react';
import './Carousel.css';

const Carousel = props => {
    return (
        <div className="carousel">
            {props.children}
        </div>
    );
}

export default Carousel;