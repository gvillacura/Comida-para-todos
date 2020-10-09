import React from 'react';
import './instagramGallery.css';
import inst1 from '../../img/instagram1.png'
import inst2 from '../../img/instagram2.png'
import inst3 from '../../img/instagram3.png'
import inst4 from '../../img/instagram4.png'
import inst5 from '../../img/instagram5.png'
import inst6 from '../../img/instagram6.png'

const InstagramGallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-title">
                <h3>CONOCE</h3>
                <h3>NUESTRO TRABAJO</h3>
            </div>
            <div className="item-gallery">
                <img src={inst1} alt="img-1" />
                <img src={inst2} alt="img-2" />
                <img src={inst3} alt="img-3" />
                <img src={inst4} alt="img-4" />
                <img src={inst5} alt="img-4" />
                <img src={inst6} alt="img-4" />
            </div>
        </div>
    )
}

export default InstagramGallery;