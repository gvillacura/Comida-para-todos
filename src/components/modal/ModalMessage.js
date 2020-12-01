import React from "react";
import "./modalMessage.css";

const modalMessage = () => {
  return (
    <div className="modalMessage-container">
      <h2>Tu solicitud ha sido enviada</h2>
      <h4>
        ¡Muchas gracias por tu aporte!
        Te contestaremos lo más rápido
        posible.
      </h4>
    </div>
  );
};

export default modalMessage;
