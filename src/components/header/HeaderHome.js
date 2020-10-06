import React from 'react';
import { Link } from 'react-router-dom';
import './header-home.css'
import logo from '../../img/logo.png';

const HeaderHome = () => {

    return (
        <header className="header">
            <div>
                <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/catalogue">Catálogo</Link>
                    </li>
                    <li>
                        <Link to="/join">Sé parte</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderHome;