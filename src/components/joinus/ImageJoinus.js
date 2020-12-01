import React from "react";
import heroText from "../../img/frase-hero.png";
import heroTextA from "../../img/frase-heroA.png";

const ImageJoinus = () => {
  return (
    <div>
      <picture>
        <source srcSet={heroTextA} media="(max-width:376px)" />
        <img src={heroText} alt="hero text img" />
      </picture>
    </div>
  );
};

export default ImageJoinus;
