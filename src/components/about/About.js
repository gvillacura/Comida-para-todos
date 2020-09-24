import React, { Fragment } from 'react';
import Header from '../header/Header';
import Collaborators from './Collaborators';
import Goals from './Goals';
import Info from './Info';
import Objectives from './Objectives';
import Team from './Team';

const AboutUs = () => {
    return (
        <Fragment>
            <Header />
            <Info />
            <Team />
            <Collaborators />
            <Objectives />
            <Goals />
        </Fragment>
    )
}

export default AboutUs;