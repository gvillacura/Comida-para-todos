import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Hero1 from '../../img/Hero1.png';
import Hero1a from '../../img/Hero1a.png';
import Hero2 from '../../img/Hero2.png';
import Hero2a from '../../img/Hero2a.png';
import Hero3 from '../../img/Hero3.png';
import Hero3a from '../../img/Hero3a.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';

const Slider = () => {
    return (
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} showIndicators={false}>
            <div>
                <picture>
                    <source srcSet={Hero1a} media="(min-width: 375px)"/>
                    <img src={Hero1} alt="img-slider1" />
                    <Link to="/join"><button type="button" className="btn-donate">Súmate</button></Link>
                </picture>
            </div>
                <div>
                    <picture>
                        <source srcSet={Hero2a} media="(min-width: 375px)" />
                        <img src={Hero2} alt="img-slider2" />
                    </picture>
                </div>
                <div>
                    <picture>
                        <source srcSet={Hero3a} media="(min-width: 375px)" />
                        <img src={Hero3} alt="img-slider3" />
                        <Link to="/catalogue"><button type="button" className="btn-donate2">Visitanos</button></Link>
                    </picture>
                </div>
        </Carousel>
    )
}

export default Slider;