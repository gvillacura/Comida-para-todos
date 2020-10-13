import React from "react";
import "./info.css";
import usHero from "../../img/usHero.png";
import usHeroA from "../../img/usHeroA.png";

const Info = () => {
  return (
    <div className="container-info">
      <picture>
        <source srcSet={usHeroA} media="(max-width:376px)" />
        <img src={usHero} alt="us-img" />
      </picture>
      <div>
        <h1 className="us-title">ACERCA DE</h1>
        <h1 className="us-title">NOSOTROS</h1>
      </div>
      <p>
        Comida para todos es una plataforma solidaria que nace de la unión de
        organizaciones sociales, instituciones públicas, restaurantes,
        productores, que busca salvaguardar la{" "}
        <strong>Seguridad Alimentaria</strong>.
      </p>
      <p>
        En el contexto de esta pandemia mundial hemos tenido una oportunidad
        única en su historia, el de dar un giro al destino y generar cambios
        reales al servicio de la comunidad, es por ello que nuestra misión como
        gastronomía social es:{" "}
        <strong>alimentar el espíritu y cuerpo de quienes lo necesiten</strong>.
      </p>
      <p>
        De esta manera fuimos capaces de unirnos treinta y cuatro organizaciones
        en Chile y España, para actuar y ponernos al servicio de quienes lo
        necesiten,{" "}
        <strong>entregado decenas de miles de almuerzos solidarios</strong>,
        trabajando en cinco ciudades en Chile y una en España, generado puestos
        de empleo, creando nuestra primera escuela con huerto urbano y lo más
        importante <strong>alimentando a miles de personas</strong>.{" "}
      </p>
      <p>
        Trabajamos para a <strong>combatir el hambre en Chile</strong>,
        promoviendo una alimentación de calidad y nutritiva; conectando,
        colaborando y generando asociatividad entre los actores de la cadena
        gastronómica y la ciudadanía.{" "}
      </p>
      <p>
        Un plato bueno que genera empleo, fomenta la educación y fortalece las
        comunidades. Un camino que necesita de la ciudadanía y el empresariado
        para poder seguir juntos llevando a Chile y cualquier otro país a lograr
        Seguridad Alimentaria y los objetivos de desarrollo sostenible (ODS) que
        de ésta se desprenden.{" "}
      </p>
    </div>
  );
};

export default Info;
