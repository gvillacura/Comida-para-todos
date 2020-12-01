import React from "react";
import cHero from "../../img/cHero.png";
import cHeroA from "../../img/cHeroA.png";

const CatHero = () => {
  return (
    <picture>
      <source srcSet={cHeroA} media="(max-width:376px)" />
      <img src={cHero} className="cHero" alt="hero" />
    </picture>
  );
};

export default CatHero;
