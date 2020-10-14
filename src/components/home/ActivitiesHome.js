import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./activitiesHome.css";
import arrowRight from "@iconify/icons-feather/arrow-right";
import act1 from "../../img/act1.png";
import act2 from "../../img/act2.png";

const ActivitiesHome = () => {
  return (
    <Fragment>
      <div className="activitiesTitle">
        <h4>NUESTRO</h4>
        <h4>TRABAJO</h4>
      </div>
      <div className="activitiesHomeContainer">
        <div className="activitiesHomeImg">
          <img src={act1} alt="activitiesHomeImg" />
        </div>
        <div className="activitiesHomeDescription">
          <div>
            <h4 className="newsTitle">NUESTROS</h4>
            <h4 className="newsTitle">PRODUCTOS</h4>
          </div>
          <p>
            {" "}
            Con mucho placer presentamos la primera línea de alimentos lanzada por nuestros emprendedores.
          </p>
          <Link to="/catalogue">
            Ir a Feria CPT <Icon icon={arrowRight} />
          </Link>
        </div>
        <div className="activitiesHomeDescription">
          <h4 className="newsTitle">ORGULLOSOS DE LO </h4>
          <h4 className="newsTitle">NUESTRO </h4>
          <p>
            {" "}
            Cada día se suman más empredimientos a nuestra red, formando así un
            ciclo económico sustentable y que genere impacto social.
          </p>
          <Link to="/catalogue">
            Nuestros emprendimientos <Icon icon={arrowRight} />
          </Link>
        </div>
        <div className="activitiesHomeImg">
          <img src={act2} alt="activitiesHomeImg" />
        </div>
      </div>
    </Fragment>
  );
};

export default ActivitiesHome;
