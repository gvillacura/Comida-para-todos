import React from 'react';
import { Icon } from '@iconify/react';
import phoneIcon from '@iconify/icons-feather/phone';
import './productList.css';

const ProductCard = (props) => {
    return (
        <div className="item" >
            <img src={props.img} alt={props.name} />
            <h5>{props.name}</h5>
            <p>{props.producer}</p>
            <div>
                <h6>{props.price}</h6>
                <button type="button" onClick={props.open}><Icon icon={phoneIcon} /></button>
            </div>
        </div>
    )
}

export default ProductCard;