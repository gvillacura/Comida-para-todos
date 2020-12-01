import React, { Fragment } from 'react';
import './team.css'
import rafa from '../../img/rafa.png';
import enriqueG from '../../img/enriqueG.png';
import hans from '../../img/hans.png';
import sebastian from '../../img/sebastian.png';
import camila from '../../img/camila.png';
import louisa from '../../img/louisa.png';
import take from '../../img/take.png';
import ale from '../../img/ale.png';
import eleanore from '../../img/eleanore.png';
import carlos from '../../img/carlos.png';
import maria from '../../img/maria.png';
import enzo from '../../img/enzo.png';

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
                        <img src={rafa} alt="avatar-img" />
                        <h5>Dir. Ejecutivo</h5>
                        <p>Rafael Rincón</p>
                    </div>

                    <div className="team-member">
                        <img src={enriqueG} alt="avatar-img" />
                        <h5>Dir. Finanzas</h5>
                        <p>Enrique Gellona</p>
                    </div>

                    <div className="team-member">
                        <img src={hans} alt="avatar-img" />
                        <h5>Dir. Finanzas</h5>
                        <p>Hans Rautenberg</p>
                    </div>

                    <div className="team-member">
                        <img src={sebastian} alt="avatar-img" />
                        <h5>Dir. Innovación</h5>
                        <p>Sebastián Gatica</p>
                    </div>

                    <div className="team-member">
                        <img src={camila} alt="avatar-img" />
                        <h5>Coord. General</h5>
                        <p>Camila Moreno</p>
                    </div>

                    <div className="team-member">
                        <img src={louisa} alt="avatar-img" />
                        <h5>Coord. Territorial</h5>
                        <p>Louisa Fernández</p>
                    </div>

                    <div className="team-member">
                        <img src={take} alt="avatar-img" />
                        <h5>Coord. Territorial</h5>
                        <p>Takehiro Kadena</p>
                    </div>

                    <div className="team-member">
                        <img src={ale} alt="avatar-img" />
                        <h5>Coord. Social</h5>
                        <p>Alejandra Vidales</p>
                    </div>

                    <div className="team-member">
                        <img src={eleanore} alt="avatar-img" />
                        <h5>Coord. Voluntarios</h5>
                        <p>Eleanore Hendersson</p>
                    </div>

                    <div className="team-member">
                        <img src={carlos} alt="avatar-img" />
                        <h5>Cons. Estratégico</h5>
                        <p>Carlos Román</p>
                    </div>

                    <div className="team-member">
                        <img src={maria} alt="avatar-img" />
                        <h5>Coord. Proyectos</h5>
                        <p>Maria José de La Fuente</p>
                    </div>

                    <div className="team-member">
                        <img src={enzo} alt="avatar-img" />
                        <h5>Coord. Administ.</h5>
                        <p>Enzo Lambertini</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team;