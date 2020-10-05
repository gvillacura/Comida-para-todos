import React, { Fragment } from 'react';
import HeaderHome from '../header/HeaderHome';
import Info from './Info';
import Pillars from './pillars';
import Team from './Team';
import Sponsors from '../home/Sponsors';
import Footer from '../footer/Footer';

const AboutUs = () => {
    return (
        <Fragment>
            <HeaderHome />
            <Info />
            <Pillars />
            <Team />
            <Sponsors />
            <Footer />
        </Fragment>
    )
}

export default AboutUs;