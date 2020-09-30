import React from 'react';
import { InlineIcon } from '@iconify/react';
import userIcon from '@iconify/icons-feather/user';
import mapPin from '@iconify/icons-feather/map-pin';
import homeIcon from '@iconify/icons-feather/home';
import './infogram.css'

const Infogram = () => {
    return (
        <div className="infogram-container">
            <div>
                <h4><InlineIcon icon={userIcon} /> 97.644</h4>
                <p>ALMUERZOS SOLIDARIOS</p>
                <p>ENTREGADOS</p>
            </div>
            <div>
                <h4><InlineIcon icon={mapPin} /> 10</h4>
                <p>COMUNAS</p>
                <p>BENEFICIADAS</p>
            </div>
            <div>
                <h4><InlineIcon icon={homeIcon} /> 28</h4>
                <p>COMEDORES</p>
                <p>AYUDADOS</p>
            </div>
        </div>
    )
}

export default Infogram;