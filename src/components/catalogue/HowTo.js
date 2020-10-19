import React from "react";
import { Icon } from "@iconify/react";
import filterIcon from "@iconify/icons-feather/filter";
import mapPin from "@iconify/icons-feather/map-pin";
import phoneIcon from "@iconify/icons-feather/phone";
import "./howto.css";

const HowTo = () => {
  return (
    <div className="howto-container">
      <div>
        <h4>¿CÓMO</h4>
        <h4>COMPRAR?</h4>
      </div>
      <div className="howto">
        <div className="how">
          <h5>
            <Icon icon={filterIcon} /> 1. FILTRAR
          </h5>
          <p>
            Puedes elegir la categoría de productos de tu preferencia, tenemos
            variedades de dulce, salado y vegano.
          </p>
        </div>
        <div className="how">
          <h5>
            <Icon icon={mapPin} /> 2. COMUNA
          </h5>
          <p>
            Al seleccionar “Comuna” se desplegará una lista para que elijas la
            comuna que más te convenga y así no alejarte mucho de tu pedido.
          </p>
        </div>
        <div className="how">
          <h5>
            {" "}
            <Icon icon={phoneIcon} /> 3.CONTACTO
          </h5>
          <p>
            El botón de contacto te permitirá saber los datos del emprendedor
            que vende el producto que deseas y así coordinar con él la
            transacción.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
