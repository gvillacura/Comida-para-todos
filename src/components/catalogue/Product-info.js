import React from 'react';
import { Icon } from "@iconify/react";
import xIcon from "@iconify/icons-feather/x";
import mapPin from '@iconify/icons-feather/map-pin';
import phoneIcon from '@iconify/icons-feather/phone';
import './product-info.css'

const ProductInfo = (props) => {
    return (
        props.productToRender.map(item => {
            if (item.photo === props.img) {
                return (
                    <div className="infomodal-container" key={item.id}>
                        <div className="infomodal-content">
                            <div className="btn-modalinfo">
                                <Icon icon={xIcon} onClick={props.close} />
                            </div>
                            <div className="product-info">
                                <div>
                                    <img src={item.photo} alt={item.name} />
                                    <p>{item.description}</p>
                                </div>
                                <div>
                                    <div>
                                    <p>Contacto</p>
                                    </div>
                                    <h3>{item.contact}</h3>
                                    <h4> <Icon icon={mapPin} /> {item.location}</h4>
                                    <div>
                                        <Icon icon={phoneIcon} />
                                        <h5>{item.phone}</h5>
                                    </div>
                                    <div>
                                    <p>Detalle de produto</p>
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