import React from 'react';
import './gallery.css';
import us1 from '../../img/us1.jpg'

const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="item-gallery">
                <img src={us1} alt="img-1" />
            </div>
            <div className="item-gallery">
                <img src={us1} alt="img-2" />
            </div>
            <div className="item-gallery">
                <img src={us1} alt="img-3" />
            </div>
            <div className="item-gallery">
                <img src={us1} alt="img-4" />
            </div>
        </div>
    )
}

export default Gallery;