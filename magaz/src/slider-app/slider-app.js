import './slider-app.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
};

    return (
        <div className='carous__block'>
    <Carousel activeIndex={index} onSelect={handleSelect} className='carous'>
        <Carousel.Item className='carous__item'>
        <Carousel.Caption>
            <h3>Скидки до 80%</h3>
            <p>Сезонная распродажа в MONO</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carous__item'>
        <Carousel.Caption>
            <h3>Осень-весна</h3>
            <p>Новая коллекция 2021</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carous__item'>
        <Carousel.Caption>
            <h3>Flash Sale</h3>
            <p>
                Распродажа началась!
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
);
}

export default ControlledCarousel;