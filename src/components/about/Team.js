import React, { Fragment } from 'react';
import './team.css'
import rafael from '../../img/rafael.png';
import enrique from '../../img/enrique.png';
import juan from '../../img/juan.png';
import francisca from '../../img/francisca.png';
import camila from '../../img/camila.png';

const Team = () => {
    return (
        <Fragment>
            <div className="team-container">
                <div>
                    <h2>EL</h2>
                    <h2>EQUIPO</h2>
                </div>
                <div className="team">
                    <div className="team-member">
                        <img src={rafael} alt="avatar-img" />
                        <h5>Director General</h5>
                        <p>Rafael Rincon</p>
                    </div>

                    <div className="team-member">
                        <img src={enrique} alt="avatar-img" />
                        <h5>Dirección Financiera</h5>
                        <p>Enrique Gellona</p>
                    </div>

                    <div className="team-member">
                        <img src={juan} alt="avatar-img" />
                        <h5>Dirección Financiera</h5>
                        <p>Juan Pedro</p>
                    </div>

                    <div className="team-member">
                        <img src={francisca} alt="avatar-img" />
                        <h5>Comunicaciones</h5>
                        <p>Francisca Diban</p>
                    </div>

                    <div className="team-member">
                        <img src={camila} alt="avatar-img" />
                        <h5>Coordinadora</h5>
                        <p>Camila Moreno</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team;