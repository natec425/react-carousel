import React from 'react';
import './Carousel.css';

class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel">
                {this.props.children}
            </div>
        );
    }
}

export default Carousel;