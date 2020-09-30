import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Hero1 from '../../img/Hero1.png';
import Hero2 from '../../img/Hero2.png'
import Hero3 from '../../img/Hero3.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';

const Slider = () => {
    return (
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} showIndicators={false}>
            <div>
                <img src={Hero1} alt="img-slider1"/>
                <button type="button" className="btn-donate">Súmate</button>
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