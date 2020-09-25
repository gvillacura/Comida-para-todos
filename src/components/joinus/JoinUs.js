import React, { Fragment } from 'react';
import Header from '../header/Header';
import Gallery from './gallery';
import Infogram from './Infrogram';
import Quote from './Quote';
import WaysTo from './WaysTo';

const JoinUs = () => {
    return (
        <Fragment>
            <Header />
            <Infogram />
            <WaysTo />
            <Quote />
            <Gallery />
        </Fragment>
    )
}

export default JoinUs;