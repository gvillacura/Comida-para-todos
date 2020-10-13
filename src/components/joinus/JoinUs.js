import React, { Fragment } from "react";
import ImageJoinus from "./ImageJoinus";
import Infogram from "../home/Infogram";
import Network from "./Network";
import WaysTo from "./WaysTo";
import InstagramGallery from "./InstagramGallery";
import Sponsors from "../home/Sponsors";
import Footer from "../footer/Footer";

const JoinUs = () => {

  const textA="ELLOS"
  const textB="TAMBIÉN DONARON"
  return (
    <Fragment>
      <ImageJoinus />
      <Infogram />
      <Network />
      <WaysTo />
      <InstagramGallery />
      <Sponsors text1={textA} text2={textB} />
      <Footer />
    </Fragment>
  );
};

export default JoinUs;
