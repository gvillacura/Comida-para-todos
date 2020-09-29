import React from 'react';
import logo from '../../img/logo.png';
import './footer.css'

const Footer = () => {
    return(
        <div className="footerContainer">
            <div className="itemsContainer">
                <div className="aboutFooter">
                    <h4>Nosotros</h4>
                    <p>Nuestro equipo</p>
                    <p>Nuestros colaboradores</p>
                    <p>Objetivos</p>
                    <p>Desafíos</p>
                </div>
                <div className="activitiesFooter">
                    <h4>Actividades</h4>
                    <p>Campañas</p>
                    <p>Noticias</p>
                    <p>Eventos</p>
                </div>
                <div className="catalogueFooter">
                    <h4>Catálogo</h4>
                    <p>Más vendidos</p>
                    <p>Nuestros productos</p>
                    <p>¿Dónde estamos?</p>
                    <p>¿Cómo comprar?</p>
                </div>
                <div className="joinusFooter">
                    <h4>Sé parte</h4>
                    <p>Nuestros logros</p>
                    <p>Formas de colaborar</p>
                </div>
                <div className="contactFooter">
                    <h4>Contacto</h4>
                    <p>rafaelh@cpt.org</p>
                    <p>+56 9 5632 0981 </p>
                </div>
            </div>
            <div>
                <img src={logo} alt="logo" className="logoFooter" />
                <div className="socialNetworks"></div>
            </div>
        </div>
    )
}

export default Footer;