import React, { Fragment } from 'react';
import Header from '../header/Header';
import Campaing from './Campaing';
import Photos from './Photos'
import News from './News';

const Activities = () => {
    return (
        <Fragment>
            <Header />
            <div className="activitiesContainer">
                <Campaing />
                <Photos />
                <News />
            </div>
        </Fragment>
    )
}

export default Activities;