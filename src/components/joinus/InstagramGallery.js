import React from "react";
import "./instagramGallery.css";
import inst1 from "../../img/instagram1.png";
import inst2 from "../../img/instagram2.png";
import inst3 from "../../img/instagram3.png";
import inst4 from "../../img/instagram4.png";
import inst5 from "../../img/instagram5.png";
import inst6 from "../../img/instagram6.png";

const InstagramGallery = () => {
  return (
    <div className="gallery-container">
      <div>
        <div className="gallery-title">
          <h3>CONOCE</h3>
          <h3>NUESTRO TRABAJO</h3>
        </div>
        <a
          target="blank"
          href="https://www.instagram.com/comida_para_todos_cl/"
        >
          <h5>@comida_para_todos_cl</h5>
        </a>
      </div>
      <div className="item-gallery">
        <a target="blank" href="https://www.instagram.com/p/CGDrhzbH1tL/">
          <img src={inst1} alt="img-1" />
        </a>
        <a target="blank" href="https://www.instagram.com/p/CGBIEPdH7sB/">
          {" "}
          <img src={inst2} alt="img-2" />
        </a>
        <a target="blank" href="https://www.instagram.com/p/CF-5Fmxn8rE/">
          {" "}
          <img src={inst3} alt="img-3" />
        </a>
        <a target="blank" href="https://www.instagram.com/p/CGN_2tcHIk4/">
          {" "}
          <img src={inst4} alt="img-4" />
        </a>
        <a target="blank" href="https://www.instagram.com/p/CF5c5K-H6_7/">
          <img src={inst5} alt="img-4" />{" "}
        </a>
        <a target="blank" href="https://www.instagram.com/p/CF2xmgwnGGC/">
          <img src={inst6} alt="img-4" />{" "}
        </a>
      </div>
    </div>
  );
};

export default InstagramGallery;
