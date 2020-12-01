import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './aboutHome.css';

const AboutHome = () => {
    return (
        <Fragment>
            <div className="aboutHomeContainer">
                <div className="aboutHomeItem">
                    <h4>¿QUIÉNES</h4> <h4>SOMOS?</h4>
                    <p>Somos un red colaborativa comunitaria,
                    que promueve los pilares de la seguridad
                    alimentaria como un derecho humano.
                </p>
                   <Link to="/about"> <button className="about-btn"  type="button">Conócenos</button></Link>
                </div>
                <div className="aboutHomeItem">
                    <h4>¿QUÉ</h4> <h4>HACEMOS?</h4>
                    <p>Creamos una plataforma solidaria, donde
                    brindamos alimento y esperanza a las familias
                    en todo el territorio nacional.
                </p>
                <Link to="/join"><button className="about-btn" type="button">Sé parte</button></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutHome;