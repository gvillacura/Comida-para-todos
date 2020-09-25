import React from 'react';
import { Link } from 'react-router-dom';
import './activitiesHome.css'

const ActivitiesHome =() =>{
    return(
        <div className="activitiesHomeContainer">
            <div className="activitiesHomeImg">
                <img src="" alt="activitiesHomeImg"/>
            </div>
            <div className="activitiesHomeDescription">
                <h4 className="newsTitle">"Lorem ipsum "</h4>
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua."
                </p>
                <Link to="/activities">NUESTRAS ACTIVIDADES</Link>
            </div>
            <div className="activitiesHomeDescription">
            <h4 className="newsTitle">"Lorem ipsum "</h4>
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua."
                </p>
                <Link to="/activities">NUESTRAS ACTIVIDADES</Link>
            </div>
            <div className="activitiesHomeImg">
                <img src="" alt="activitiesHomeImg"/>
            </div>
        </div>
    )
}

export default ActivitiesHome;