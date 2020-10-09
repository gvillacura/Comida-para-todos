import React, { useState, Fragment } from 'react';
import './productList.css';
import ProductInfo from './Product-info';
import ProductCard from './ProductCard';

const ProductList = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [imgProduct, setImgProduct] = useState(undefined);

    const closeModal = () => {
        setShowModal(false);
    };

    const openModal = (e) => {
        setImgProduct(e.currentTarget.parentElement.parentElement.firstChild.getAttribute('src'));
        setShowModal(true);
    };

    return (
        props.products.map(item => {
            return (
                <Fragment  key={item.id}>
                    <ProductCard
                        img={item.photo}
                        name={item.name}
                        producer={item.producer}
                        price={item.price}
                        open={openModal} />
                    {showModal === false ? null :
                        <ProductInfo close={closeModal}
                            productToRender={props.products}
                            img={imgProduct} />}
                </Fragment>
            );
        })

    )
}

export default ProductList;