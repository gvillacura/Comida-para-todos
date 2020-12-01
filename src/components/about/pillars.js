import React from "react";
import alimento from "../../img/alimento.png";
import empleo from "../../img/empleo.png";
import comunidad from "../../img/comunidad.png";
import educacion from "../../img/educacion.png";
import "./pillars.css";

const Pillars = () => {
  return (
    <div>
      <div className="pillars-title">
        <h3>NUESTROS</h3>
        <h3>PILARES</h3>
      </div>
      <div className="pillars-container">
        <div>
          <img src={alimento} alt="alimento-bueno" />
          <h4>Alimento Bueno</h4>
          <p>
            Distribuir alimento de calidad, nutritivo y cuidado, a quienes más
            lo necesitan
          </p>
        </div>
        <hr></hr>
        <div>
          <img src={empleo} alt="empleo" />
          <h4>Empleo</h4>
          <p>
            Fomentar el empleo, enfocado en los sectores productivos más
            vulnerables
          </p>
        </div>
        <hr></hr>
        <div>
          <img src={comunidad} alt="comunidad" />
          <h4>Comunidad</h4>
          <p>
            Crear y trabajar junto a la comunidad, forjar redes y estando al
            servicio de ella
          </p>
        </div>
        <hr></hr>
        <div>
          <img src={educacion} alt="educación" />
          <h4>Educación</h4>
          <p>
            Educar en materias de alimentación saludable y técnicas culinarias
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pillars;
