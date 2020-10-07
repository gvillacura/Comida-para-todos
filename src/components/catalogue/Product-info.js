import React from 'react';
import { Icon } from "@iconify/react";
import xIcon from "@iconify/icons-feather/x";
import phoneIcon from '@iconify/icons-feather/phone';
import './product-info.css'

const ProductInfo = (props) => {
    return (
        <div className="infomodal-container">
            <div className="infomodal-content">
                <div className="btn-modalinfo">
                    <Icon icon={xIcon} onClick={props.close} />
                </div>
                <div className="product-info">
                    <img src={props.img} alt={props.name} />
                    <div>
                        <h3>{props.producer}</h3>
                        <h4>{props.location}</h4>
                        <div>
                            <button type="button"><Icon icon={phoneIcon} /></button>
                            <h5>{props.phone}</h5>
                        </div>
                        <h6>{props.name}</h6>
                        <p>{props.producer}</p>
                        <h5>{props.price}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;