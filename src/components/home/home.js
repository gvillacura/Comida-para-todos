import React, { Fragment } from 'react';
import Header from '../header/Header';
import Slider from './Carousel'
import AboutHome from './AboutHome';
import ActivitiesHome from './ActivitiesHome';
import JoinusHome from './JoinusHome'
import Footer from '../footer/Footer';
import HeaderHome from '../header/HeaderHome';

const Home = () => {
    return (
        <Fragment>
            <HeaderHome />
            <Slider/>
            <AboutHome />
            <ActivitiesHome />
            <JoinusHome/>
            <Footer/>
        </Fragment>
    )
}

export default Home;