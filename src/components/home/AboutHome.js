import React from 'react';
import './aboutHome.css'
const AboutHome= () =>{
    return(
        <div className="aboutHomeContainer">
            <div className="aboutHomeItem">
                <h4>¿QUIÉNES SOMOS?</h4>
                <p>Somos un red colaborativa comunitaria,  
                    que promueve los pilares de la seguridad 
                    alimentaria como un derecho humano.
                </p>
                <button type="button">Conócenos</button>
            </div>
            <div className="aboutHomeItem">
                <h4>¿QUÉ HACEMOS?</h4>
                <p>Creamos una plataforma solidaria, donde 
                    brindamos alimento y esperanza a las familias 
                    en todo el territorio nacional.
                </p>
                <button type="button">Sé parte</button>
            </div>

        </div>
    )
}

export default AboutHome;