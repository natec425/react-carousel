import React, { useState } from 'react';
import './Carousel.css';

const modifier = (childIndex, selectedIndex) => {
    switch (childIndex - selectedIndex) {
        case 0:
            return 'center';
        case -1:
            return 'left';
        case 1:
            return 'right';
        default:
            return 'hidden';
    }
}

const Carousel = props => {

    const [selectedChild, setSelectedChild] = useState(0);

    return (
        <div className="carousel">
            <div className="carousel__children-container">
                {props.children.map((child, i) =>
                    <div className={`carousel__child carousel__child--${modifier(i, selectedChild)}`} >
                        {child}
                    </div>)}
            </div>
            <div className="carousel__selectors-container">
                <button onClick={() => setSelectedChild(selectedChild - 1)}>Previous</button>
                <button onClick={() => setSelectedChild(selectedChild + 1)}>Next</button>
            </div>
        </div>
    );
}

export default Carousel;