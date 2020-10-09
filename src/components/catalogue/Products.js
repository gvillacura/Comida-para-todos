import React, { useState, useEffect, useRef } from 'react';
import ProductList from './ProductList';
import './products.css';

const Products = () => {

    let [catalogue, setCatalogue] = useState([]);
    let [originalData, setOriginalData] = useState([]);
    let checkD = useRef(null);
    let checkS = useRef(null);
    let checkV = useRef(null);
    let checkC = useRef(null);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setCatalogue(catalogue = data));
    }, []);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setOriginalData(originalData = data));
    }, []);

    const filterDataD = (e) => {
        console.log(checkD.current.checked);
        if (e.target.checked === true) {
            const newCatalogueD = catalogue.filter(item => item.category.includes(e.target.value));
            setCatalogue(catalogue = newCatalogueD);
        }
        else {
            setCatalogue(catalogue = originalData);
            checkV.current.checked = false;
            checkS.current.checked = false;
            checkC.current.value = "";
        }
    }

    const filterDataS = (e) => {
        if (e.target.checked === true) {
            const newCatalogueS = catalogue.filter(item => item.category.includes(e.target.value));
            setCatalogue(catalogue = newCatalogueS);
        }
        else {
            setCatalogue(catalogue = originalData);
            checkD.current.checked = false;
            checkV.current.checked = false;
            checkC.current.value = "";
        }
    }

    const filterDataV = (e) => {
        if (e.target.checked === true) {
            const newCatalogueV = catalogue.filter(item => item.category.includes(e.target.value));
            setCatalogue(catalogue = newCatalogueV);
        }
        else {
            setCatalogue(catalogue = originalData);
            checkD.current.checked = false;
            checkS.current.checked = false;
            checkC.current.value = "";

        }
    }

    const filterDataC = (e) => {
        checkD.current.checked = false;
        checkS.current.checked = false;
        checkV.current.checked = false;
        setCatalogue(catalogue = originalData);
        const newCatalogueC = catalogue.filter(item => item.location === e.target.value);
        setCatalogue(catalogue = newCatalogueC);
    }

    return (
        <div className="container">
            <div className="filter-container">
                <form>
                    <label>
                        <input type="checkbox" value="dulce" ref={checkD} onChange={filterDataD}></input> Dulce
                    </label>
                    <label>
                        <input type="checkbox" value="salado" ref={checkS} onChange={filterDataS}></input> Salado
                    </label>
                    <label>
                        <input type="checkbox" value="vegano" ref={checkV} onChange={filterDataV}></input> Vegano
                    </label>
                </form>

                <select defaultValue="" ref={checkC} onChange={filterDataC}>
                    <option value="" disabled>Por Comuna</option>
                    <option value="Estación Central">Estación Central</option>
                    <option value="La Cisterna">La Cisterna</option>
                    <option value="Las Condes">Las Condes</option>
                    <option value="La Reina">La Reina</option>
                    <option value="Lo Espejo">Lo Espejo</option>
                    <option value="Macul">Macul</option>
                    <option value="Providencia">Providencia</option>
                    <option value="San Miguel">San Miguel</option>


                </select>
            </div>
            <div className="product-container">
                <ProductList products={catalogue} key="list" />
            </div>
        </div>
    )
}

export default Products;