import React from 'react';
import { Icon } from "@iconify/react";
import xIcon from "@iconify/icons-feather/x";
import phoneIcon from '@iconify/icons-feather/phone';
import './product-info.css'

const ProductInfo = (props) => {
    return (
        props.productToRender.map(item => {
        if (item.photo === props.img) {
            return (
                <div className="infomodal-container" key="modal">
                    <div className="infomodal-content">
                        <div className="btn-modalinfo">
                            <Icon icon={xIcon} onClick={props.close} />
                        </div>
                        <div className="product-info">
                            <img src={item.photo} alt={item.name} />
                            <div>
                                <h3>{item.producer}</h3>
                                <h4>{item.location}</h4>
                                <div>
                                    <button type="button"><Icon icon={phoneIcon} /></button>
                                    <h5>{item.phone}</h5>
                                </div>
                                <h6>{item.name}</h6>
                                <p>{item.producer}</p>
                                <h5>{item.price}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            ) 
        }
    }))
}

export default ProductInfo;