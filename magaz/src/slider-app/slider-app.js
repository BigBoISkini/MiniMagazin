import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './slider-app.css';

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
};

    return (
        <div className='carous__block'>

    <Carousel onSelect={handleSelect} className='carous'>
        <Carousel.Item className='carous__item'>
        </Carousel.Item>
        <Carousel.Item className='carous__item'>
        </Carousel.Item>
        <Carousel.Item className='carous__item'>
        </Carousel.Item>
    </Carousel>
    
    </div>
);
}

export default ControlledCarousel;