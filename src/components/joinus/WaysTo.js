import React from "react";
import "./waysTo.css";
import { Icon } from "@iconify/react";
import packageIcon from "@iconify/icons-feather/package";
import awardIcon from "@iconify/icons-feather/award";
import layersIcon from "@iconify/icons-feather/layers";
import coffeeIcon from "@iconify/icons-feather/coffee";
import heartIcon from "@iconify/icons-feather/heart";

const JoinusHome = () => {
  return (
    <div className="waysContainer">
      <div>
        <h4>TÚ PUEDES</h4>
        <h4>SER PARTE</h4>
      </div>
      <div className="waysItemContainer">
        <div className="lunch-container">
          <div>
            <div>
              <h3>
                <Icon icon={coffeeIcon} />1 ALMUERZO
              </h3>
              <p>
                Donando un almuerzo solidario podrás ser parte de esta gran red
                de ayuda en Chile y el mundo. Recuerda que no sólo es un plato
                de comida, es cariño y cuidado.
              </p>
            </div>
          </div>
          <div className="btn-container">
            <button type="button" className="waysto-donate-btn">
              <Icon icon={heartIcon} />
              Donar
            </button>
          </div>
        </div>
        <hr width="1" size="300"></hr>
        <div className="resources-container">
          <div>
            <div>
              <h3>
                <Icon icon={awardIcon} />
                TALENTO
              </h3>
              <p>
                El capital humano es lo más importante en Comida para Todos,
                puedes ser voluntario y donar tu tiempo y esfuerzo, sin duda
                estaremos agradecidos
              </p>
            </div>
            <div>
              <h3>
                <Icon icon={packageIcon} />
                MERCADERÍA
              </h3>
              <p>
                Promovemos la cultura de “cero desperdicio”, si tienes comida
                aún en buenas condiciones y que no usarás, con mucho gusto la
                recibiremos
              </p>
            </div>
            <div>
              <h3>
                <Icon icon={layersIcon} />
                M2 HUERTA
              </h3>
              <p>
                Creemos que la soberanía alimentaria desempeña un papel
                importante para combatir el hambre, por ello puedes donar m2
                para que contruyamos una huerta
              </p>
            </div>
          </div>
          <div className="btn-container">
            <button type="button" className="contact-btn">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinusHome;
