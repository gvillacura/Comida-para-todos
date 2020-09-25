import React, {Fragment} from 'react';
import Header from '../header/Header';
import AboutHome from './AboutHome'
import ActivitiesHome from './ActivitiesHome'

const Home = () => {
    return(
        <Fragment>
            <Header/>
            <AboutHome/>
            <ActivitiesHome/>
        </Fragment>
    )
}

export default Home;