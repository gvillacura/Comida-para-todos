import data from '@iconify/icons-feather/x';
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

    const filterData = (e) => {
        console.log(e.target.value);
        const newCatalogue = catalogue.filter(item => item.category === e.target.value)
        console.log(newCatalogue);
        setCatalogue(catalogue = newCatalogue); 
    }

    return (
        <div className="container">
            <div className="filter-container">
                <form>
                    <label>
                        <input type="checkbox" value="dulce" onChange={filterData}></input> Dulce
                    </label>
                    <label>
                        <input type="checkbox" value="salado" onChange={filterData}></input> Salado
                    </label>
                    <label>
                        <input type="checkbox" value="vegano" onChange={filterData}></input> Vegano
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
                <ProductList products={catalogue} key="list"/>
            </div>
        </div>
    )
}

export default Products;