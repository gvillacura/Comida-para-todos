import React, { Fragment } from "react";
import Footer from "../footer/Footer";
import CatHero from "./CatHero";
import HowTo from "./HowTo";
import Products from "./Products";

const Catalogue = () => {
  return (
    <Fragment>
      <CatHero />
      <HowTo />
      <Products />
      <Footer />
    </Fragment>
  );
};

export default Catalogue;
