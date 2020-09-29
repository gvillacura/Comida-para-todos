import React from 'react';
import { Link } from 'react-router-dom';
import './activitiesHome.css'
import us1 from '../../img/us1.jpg'

const ActivitiesHome =() =>{
    return(
        <div className="activitiesHomeContainer">
            <div className="activitiesHomeImg">
                <img src={us1} alt="activitiesHomeImg"/>
            </div>
            <div className="activitiesHomeDescription">
                <h4 className="newsTitle">UN 18 DIFERENTE</h4>
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua."
                </p>
                <Link to="/activities">NUESTRAS ACTIVIDADES →</Link>
            </div>
            <div className="activitiesHomeDescription">
            <h4 className="newsTitle">ORGULLOSOS DE LO NUESTRO </h4>
                <p> "Cada día se suman más empredimientos a nuestra red, 
                    formando así un ciclo económico sustentable y que genere impacto social."
                </p>
                <Link to="/activities">NUESTRAS ACTIVIDADES →</Link>
            </div>
            <div className="activitiesHomeImg">
                <img src={us1} alt="activitiesHomeImg"/>
            </div>
        </div>
    )
}

export default ActivitiesHome;