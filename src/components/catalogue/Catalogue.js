import React, { Fragment } from 'react';
import HeaderHome from '../header/HeaderHome';
import Footer from '../footer/Footer';
import CatHero from './CatHero';
import HowTo from './HowTo';
import Products from './Products';

const Catalogue = () => {
    return (
        <Fragment>
            <HeaderHome />
            <CatHero />
            <HowTo />
            <Products />
            <Footer />
        </Fragment>
    )
}

export default Catalogue;