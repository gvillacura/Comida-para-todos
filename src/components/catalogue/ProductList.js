import React from 'react';
import { Icon } from '@iconify/react';
import phoneIcon from '@iconify/icons-feather/phone';
import './productList.css';

const ProductList = (props) => {

    return (
        props.products.map(item => {
            return (
                <div className="item" key={item.id}>
                    <img src={item.photo} alt={item.name}/>
                    <h5>{item.name}</h5>
                    <p>{item.producer}</p>
                    <div>
                        <h6>{item.price}</h6>
                        <button type="button"><Icon icon={phoneIcon} /></button>
                    </div>
                </div>
            );
        })
    )
}

export default ProductList;