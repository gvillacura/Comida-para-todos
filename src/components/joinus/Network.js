import React from "react";
import "./network.css";
import { Icon } from "@iconify/react";
import codepenIcon from "@iconify/icons-feather/codepen";
import globeIcon from "@iconify/icons-feather/globe";
import truckIcon from "@iconify/icons-feather/truck";
import coffeeIcon from "@iconify/icons-feather/coffee";
import usersIcon from "@iconify/icons-feather/users";

const Network = () => {
  return (
    <div className="networkContainer">
      <div>
        <h4>¿CÓMO FUNCIONA</h4>
        <h4>LA RED?</h4>
      </div>
      <div className="networkItemContainer">
        <div>
          <h3>
            <Icon icon={globeIcon} />
            1. Donar
          </h3>
          <p>
            Se donan los almuerzos solidarios vía www.comidaparatodos.cl $3.000
            =1 almuerzo.
          </p>
        </div>
        <hr></hr>
        <div>
          <h3>
            <Icon icon={codepenIcon} />
            2. Recolectar
          </h3>
          <p>
            Se recolectan las donaciones; activamos a los restaurantes y a su
            red de micro productores.
          </p>
        </div>
        <hr></hr>
        <div>
          <h3>
            <Icon icon={truckIcon} />
            3. Transportar
          </h3>
          <p>
            Conectamos a los transportistas para llevar adecuadamente los
            almuerzos solidarios.
          </p>
        </div>
        <hr></hr>
        <div>
          <h3>
            <Icon icon={coffeeIcon} />
            4. Alimentar
          </h3>
          <p>
            El alimento que ha sido cocinado en los restaurantes es llevado a
            las comunidades.
          </p>
        </div>
        <hr></hr>
        <div>
          <h3>
            <Icon icon={usersIcon} /> 5. Apadrinar
          </h3>
          <p>
            El restaurante apadrina a una comunidad, donde capacita y promueve
            la alimentación saludable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Network;
