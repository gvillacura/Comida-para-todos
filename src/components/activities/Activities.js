import React, { Fragment } from 'react';
import HeaderHome from '../header/HeaderHome';
import Campaing from './Campaing';
import Photos from './Photos'
import News from './News';

const Activities = () => {
    return (
        <Fragment>
            <HeaderHome />
            <div className="activitiesContainer">
                <Campaing />
                <Photos />
                <News />
            </div>
        </Fragment>
    )
}

export default Activities;