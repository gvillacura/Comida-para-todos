import React, { useState } from "react";
import "./waysTo.css";
import Modal from "../modal/Modal";
import { Icon } from "@iconify/react";
import packageIcon from "@iconify/icons-feather/package";
import awardIcon from "@iconify/icons-feather/award";
import layersIcon from "@iconify/icons-feather/layers";
import coffeeIcon from "@iconify/icons-feather/coffee";
import toolTip from "../../img/Tool-Tip.png";
const JoinusHome = () => {
  const [showModal, setShowModal] = useState(false);

  const [showSpan, setShowSpan] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div className="waysContainer">
      <div className="waysItemContainer">
        <div className="lunch-container">
          <div className="lunch-container-title">
            <h3>DONAR</h3>
          </div>
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
            <div className="btn-container">
              <div>
                <span disabled={showSpan}>
                  <img src={toolTip} alt="tooltip-img" />
                </span>
                <a
                  target="blank"
                  href="https://yodono.cl/proyecto/207/CultivaComidaparaTods"
                >
                  <button
                    type="button"
                    className="waysto-donate-btn"
                    onMouseEnter={() => setShowSpan(true)}
                    onMouseLeave={() => setShowSpan(false)}
                  >
                    Donar
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="resources-container">
          <div className="resources-container-title">
            <h3>OTRAS</h3>
            <h3>DONACIONES</h3>
          </div>
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
            <button type="button" className="contact-btn" onClick={openModal}>
              Contáctanos
            </button>
          </div>
        </div>
      </div>
      {showModal === false ? null : <Modal close={closeModal} />}
    </div>
  );
};

export default JoinusHome;
