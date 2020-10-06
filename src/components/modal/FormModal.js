import React, { useState } from "react";
import "./formModal.css";

const FormModal = (props) => {
  // const [disabledButton, setDisabledButton] = useState(true);

  // if(){setDisabledButton(false)}

  return (
    <div className="modal-items">
      <h2>¡Muchas gracias!</h2>
      <h4 className="text-modal">
        Por favor, llena la solicitud y te contestaremos a la brevedad posible.
      </h4>
      <p>Nombre y Apellido</p>
      <input />
      <p>Correo</p>
      <input />
      <p>Teléfono</p>
      <input />
      <p>Cuéntanos tu tipo de donación</p>
      <input className="donation-type" />
      <div className="send-btn">
        <button onClick={props.open}>ENVIAR</button>
      </div>
    </div>
  );
};

export default FormModal;
