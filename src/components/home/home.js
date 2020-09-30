import React, { Fragment } from 'react';
import Slider from './Carousel'
import AboutHome from './AboutHome';
import ActivitiesHome from './ActivitiesHome';
import JoinusHome from './JoinusHome'
import Footer from '../footer/Footer';
import HeaderHome from '../header/HeaderHome';
import Infogram from './Infogram';
import Sponsors from './Sponsors';

const Home = () => {
    return (
        <Fragment>
            <HeaderHome />
            <Slider/>
            <Infogram />
            <AboutHome />
            <ActivitiesHome />
            <JoinusHome/>
            <Sponsors/>
            <Footer/>
        </Fragment>
    )
}

export default Home;