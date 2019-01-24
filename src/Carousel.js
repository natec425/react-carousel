import React, { useState } from 'react';
import './Carousel.css';

const directionModifier = (childIndex, selectedIndex) => {
    if (childIndex < selectedIndex)
        return 'left';
    else if (childIndex > selectedIndex)
        return 'right';
    else
        return 'center';
}

const shouldBeHidden = (childIndex, selectedIndex) => {
    return Math.abs(childIndex - selectedIndex) > 1;
}


const childModifiers = (childIndex, selectedIndex) => {
    const applicableModifiers = [];
    if (shouldBeHidden(childIndex, selectedIndex))
        applicableModifiers.push('hidden');

    applicableModifiers.push(directionModifier(childIndex, selectedIndex))

    return applicableModifiers.map(modifier => `carousel__child--${modifier}`).join(' ')
}

const selectorModifiers = (selectorIndex, selectedIndex) => {
    if (selectorIndex === selectedIndex)
        return 'carousel__selector--active';
    else
        return '';
}

const Carousel = props => {

    const [selectedChild, setSelectedChild] = useState(0);
    const [drag, setDrag] = useState(null);

    return (
        <div className="carousel">
            <div className="carousel__children-container"
                onTouchStart={evt => setDrag({ startX: evt.touches[0].pageX })}
                onTouchMove={evt => setDrag(Object.assign({}, drag, { endX: evt.touches[0].pageX }))}
                onTouchEnd={evt => { setDrag(null); console.log('down') }}
                style={drag ? { transform: `translateX(${-(drag.startX - drag.endX)}px)` } : {}}>
                {props.children.map((child, i) =>
                    <div key={i} className={`carousel__child ${childModifiers(i, selectedChild)}`} >
                        {child}
                    </div>)}
            </div>
            <div className="carousel__selectors-container">
                {props.children.map((_child, i) =>
                    <button key={i} className={`carousel__selector ${selectorModifiers(i, selectedChild)}`} onClick={() => setSelectedChild(i)}></button>)}
            </div>
        </div >
    );
}

export default Carousel;