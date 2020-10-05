import React from 'react';
import './info.css';
import usHero from '../../img/usHero.png'

const Info = () => {
    return (
        <div className="container-info">
            <img src={usHero} alt="us-img" />
            <div>
                <h1 className="us-title">ACERCA DE</h1>
                <h1 className="us-title">NOSOTROS</h1>
            </div>
            <p>"Comida para todos” es una plataforma solidaria que nace de la unión de organizaciones sociales, instituciones públicas, restaurantes, productores, que busca salvaguardar la Seguridad Alimentaria.</p>
            <p>Trabajamos para ayudar a combatir el hambre en Chile, promoviendo una alimentación de calidad y nutritiva; conectando, colaborando y generando asociatividad entre los actores de la cadena gastronómica y la ciudadanía.</p>
            <p>En el contexto de esta pandemia mundial, la gastronomía tiene una oportunidad única en su historia, justamente en el momento más difícil de su camino. Cuando la tristeza , la depresión y la frustración campaban a sus anchas, tuvimos la oportunidad de dar un giro al destino y ser protagonistas de cambios reales, al servicio de la comunidad, escuchando de manera sincera nuestra misión genuina como gastrónomos: alimentar el espíritu y cuerpo de quienes lo necesiten, gastronomía social. </p>
            <p>De esta manera fuimos capaces de unirnos treinta y cuatro organizaciones en Chile y España, para actuar y ponernos al servicio de quienes lo necesiten, entregado decenas de miles de almuerzos solidarios, trabajando en cinco ciudades en Chile y una en España, generado  puestos de empleo, creando nuestra primera escuela con huerto urbano y lo más importante alimentando a miles de personas. </p>
            <p>Un plato bueno que genera empleo, fomenta la educación y fortalece las comunidades. Un camino  que necesita de la ciudadanía y el empresariado para poder seguir juntos llevando a Chile y cualquier otro país a lograr Seguridad Alimentaria y los objetivos de desarrollo sostenible (ODS) que de ésta se desprenden. </p>
            <p>Por lo tanto este proyecto se sustenta en 4 pilares fundamentales:</p>
        </div>
    )
}

export default Info;