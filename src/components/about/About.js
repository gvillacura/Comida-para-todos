import React, { Fragment } from "react";
import Info from "./Info";
import Pillars from "./pillars";
import Team from "./Team";
import Sponsors from "../home/Sponsors";
import Footer from "../footer/Footer";

const AboutUs = () => {

  const textA = "NUESTROS";
  const textB = "COLABORADORES";

  return (
    <Fragment>
      <Info />
      <Pillars />
      <Team />
      <Sponsors text1={textA} text2={textB} />
      <Footer />
    </Fragment>
  );
};

export default AboutUs;
