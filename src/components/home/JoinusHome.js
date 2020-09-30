import React from "react";
import './joinusHome.css';
import { Icon } from '@iconify/react';
import packageIcon from '@iconify/icons-feather/package';
import awardIcon from '@iconify/icons-feather/award';
import layersIcon from '@iconify/icons-feather/layers';
import heartIcon from '@iconify/icons-feather/heart';







const JoinusHome = () => {
    return(
        <div className="joinusHomeContainer">
            <div>
                <h4>TÚ PUEDES</h4>
                <h4>SER PARTE</h4>
            </div>
            <div className="joinusHomeItemContainer">
                <div>
                    <h3><Icon icon={awardIcon} />TALENTO</h3>
                    <p>El capital humano es lo más importante en Comida para Todos, puedes ser voluntario y donar tu tiempo y esfuerzo, sin duda estaremos agradecidos</p>
                </div>
                <div>
                    <h3><Icon icon={packageIcon} />MERCADERÍA</h3>
                    <p>Promovemos la cultura de “cero desperdicio”, si tienes comida aún en buenas condiciones y que no usarás, con mucho gusto la recibiremos</p>
                </div>
                <div>
                    <h3><Icon icon={layersIcon} />M2 HUERTA</h3>
                    <p>Creemos que la soberanía alimentaria desempeña un papel importante para combatir el hambre, por ello puedes donar m2 para que contruyamos una huerta</p>
                </div>
            </div>
            <button type="button" className="donate-btn"><Icon icon={heartIcon} />Donar</button>
        </div>
    )
}

export default JoinusHome;