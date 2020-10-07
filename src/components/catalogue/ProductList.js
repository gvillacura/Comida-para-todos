import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import phoneIcon from '@iconify/icons-feather/phone';
import './productList.css';
import ProductInfo from './Product-info';

const ProductList = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [imgProduct, setImgProduct] = useState(undefined);
    const [productName, setProductName] = useState(undefined);

    const closeModal = () => {
        setShowModal(false);
    };
    const openModal = (e) => {
        setImgProduct(e.currentTarget.parentElement.parentElement.firstChild.getAttribute('src'));

        props.products.filter(item => {
            if (item.photo === imgProduct){
                setProductName(item.name)
                console.log(productName);
            } 
        })

        setShowModal(true);
    };

    
    return (
        props.products.map(item => {
            return (
                <div className="item" key={item.id}>
                    <img src={item.photo} alt={item.name} />
                    <h5>{item.name}</h5>
                    <p>{item.producer}</p>
                    <div>
                        <h6>{item.price}</h6>
                        <button type="button" onClick={openModal}><Icon icon={phoneIcon} /></button>
                    </div>
                    {showModal === false ? null : 
                        <ProductInfo close={closeModal} 
                            img={imgProduct}
                            name={item.name}
                            producer={item.producer}
                            location={item.location}
                            phone={item.phone}
                            price={item.price} /> } 
                </div>
            );
        })
    
    )
}

export default ProductList;