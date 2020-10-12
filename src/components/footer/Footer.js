import React from 'react';
import logo from '../../img/logo.png';
import './footer.css';
import { Icon } from '@iconify/react';
import instagramIcon from '@iconify/icons-feather/instagram';
import twitterIcon from '@iconify/icons-feather/twitter';
import facebookIcon from '@iconify/icons-feather/facebook';
import mapIcon from '@iconify/icons-feather/map';
import messageCircle from '@iconify/icons-feather/message-circle';
import mailIcon from '@iconify/icons-feather/mail';



const Footer = () => {
    return (
        <div className="footerContainer">
            <div>
                <img src={logo} alt="logo" className="logoFooter" />
            </div>
            <div className="itemsContainer">
                <div className="aboutFooter">
                    <h4>Nosotros</h4>
                    <h4>Catálogo</h4>
                    <h4>Sé parte</h4>
                </div>
                <div className="findUsFooter">
                    <div>
                        <Icon icon={mapIcon} />
                        <div>
                            <h4>Dirección</h4>
                            <p className="pFooter">Las Acacias nº 834, Santiago Centro</p>
                        </div>
                    </div>
                    <div>
                        <Icon icon={messageCircle} />
                        <div>
                            <h4>Whatsapp</h4>
                            <p className="pFooter">+56 9 8645 3421</p>
                        </div>
                    </div>
                    <div>
                        <Icon icon={mailIcon} />
                        <div>
                            <h4>Correo</h4>
                            <p className="pFooter">javierah@comidaparatodos.com</p>
                        </div>
                    </div>
                </div>
                <div className="rrssFooter">
                    <h4>Síguenos en nuestras redes</h4>
                    <Icon icon={instagramIcon} />
                    <Icon icon={twitterIcon} />
                    <Icon icon={facebookIcon} />
                </div>
            </div>

        </div>
    )
}

export default Footer;