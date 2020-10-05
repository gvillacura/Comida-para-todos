import React from "react";
import "./waysTo.css";
import us1 from "../../img/us1.jpg";

const WaysTo = () => {
  return (
    <div className="way2">
      <h2 className="sub-title">Formas de Colaborar</h2>
      <div className="ways-container2">
        <div className="ways2">
          <img src={us1} alt="way-to" />
          <p>Lorem ipsum</p>
          <button type="button">Colaborar</button>
        </div>

        <div className="ways2">
          <img src={us1} alt="way-to" />
          <p>Lorem ipsum</p>
          <button type="button">Colaborar</button>
        </div>

        <div className="ways2">
          <img src={us1} alt="way-to" />
          <p>Lorem ipsum</p>
          <button type="button">Colaborar</button>
        </div>
      </div>
    </div>
  );
};

export default WaysTo;