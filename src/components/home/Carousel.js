import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Hero1 from '../../img/Hero1.png';
import Hero2 from '../../img/Hero2.png'
import Hero3 from '../../img/Hero3.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';

const Slider = () => {
    return (
        <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false} showThumbs={false}>
            <div>
                <img src={Hero1} alt="img-slider1"/>
            </div>
            <div>
                <img src={Hero2} alt="img-slider2"/>
            </div>
            <div>
                <img src={Hero3} alt="img-slider3"/>
            </div>
        </Carousel>
    )
}

export default Slider;