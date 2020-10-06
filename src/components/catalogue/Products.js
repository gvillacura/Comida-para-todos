import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import './products.css';

const Products = () => {

    let [catalogue, setCatalogue] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setCatalogue(catalogue = data));
    }, []);

    return (
        <div className="container">
            <div className="filter-container">
                <form>
                    <label>
                        <input type="checkbox" value="dulce"></input> Dulce
                    </label>
                    <label>
                        <input type="checkbox" value="salado"></input> Salado
                    </label>
                    <label>
                        <input type="checkbox" value="vegano"></input> Vegano
                    </label>
                </form>
                
                <select> 
                    <option value="">Por Comuna</option>
                    <option value="santiago">Santiago</option>
                    <option value="las condes">Las Condes</option>
                    <option value="providencia">Providencia</option>
                    <option value="lo espejo">Lo Espejo</option>
                    <option value="estación central">Estación Central</option>
                </select>
            </div>
            <div className="product-container">
                <ProductList products={catalogue} />
            </div>
        </div>
    )
}

export default Products;