import React, { Fragment } from 'react';
import './team.css'

const Team = () => {
    return (
        <Fragment>
            <div className="team-container">
                <h2 className="team-title">Nuestro Equipo</h2>
                <div className="team">
                    <div className="team-member">
                        <img src="" alt="avatar-img" />
                        <p className="member-name">Lorem Ipsum</p>
                        <p className="member-position">Lorem ipsum dolor</p>
                    </div>

                    <div className="team-member">
                        <img src="" alt="avatar-img" />
                        <p className="member-name">Lorem Ipsum</p>
                        <p className="member-position">Lorem ipsum dolor</p>
                    </div>

                    <div className="team-member">
                        <img src="" alt="avatar-img" />
                        <p className="member-name">Lorem Ipsum</p>
                        <p className="member-position">Lorem ipsum dolor</p>
                    </div>

                    <div className="team-member">
                        <img src="" alt="avatar-img" />
                        <p className="member-name">Lorem Ipsum</p>
                        <p className="member-position">Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Team;