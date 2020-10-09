import React, { Fragment } from "react";
import ImageJoinus from "./ImageJoinus";
import Infogram from "../home/Infogram";
import Network from "./Network";
import WaysTo from "./WaysTo";
import InstagramGallery from "./InstagramGallery";
import Sponsors from "../home/Sponsors";
import Footer from "../footer/Footer";

const JoinUs = () => {
  return (
    <Fragment>
      <ImageJoinus />
      <Infogram />
      <Network />
      <WaysTo />
      <InstagramGallery />
      <Sponsors />
      <Footer />
    </Fragment>
  );
};

export default JoinUs;
