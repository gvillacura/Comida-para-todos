import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import logo from '../../img/logo.png';

const Header = () => {

    return (
        <header>
            <img src={logo} alt="logo" className="logo" />
            <nav>
                <ul>
                    <li>
                        <Link to="/about">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/activities">Actividades</Link>
                    </li>
                    <li>
                        <Link to="">Catálogo</Link>
                    </li>
                    <li>
                        <Link to="/join">Sé parte</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;