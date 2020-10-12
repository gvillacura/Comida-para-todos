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
                <div>
                    <InlineIcon icon={userIcon} />
                    <h4>97.644</h4>
                </div>
                <p>ALMUERZOS SOLIDARIOS</p>
                <p>ENTREGADOS</p>
            </div>
            <div>
                <div>
                    <InlineIcon icon={mapPin} />
                    <h4>10</h4>
                </div>
                <p>COMUNAS</p>
                <p>BENEFICIADAS</p>
            </div>
            <div>
                <div>
                    <InlineIcon icon={homeIcon} />
                    <h4>28</h4>
                </div>
                <p>COMEDORES</p>
                <p>AYUDADOS</p>
            </div>
        </div>
    )
}

export default Infogram;