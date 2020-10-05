import React, { Fragment } from "react";
import Header from "../header/HeaderHome";
import ImageJoinus from "./ImageJoinus";
import Infogram from "../home/Infogram";
import Network from "./Network";
import WaysTo from "./WaysTo";
import ActivitiesHome from "../home/ActivitiesHome";
import Sponsors from "../home/Sponsors";
import Footer from "../footer/Footer";

const JoinUs = () => {
  return (
    <Fragment>
      <Header />
      <ImageJoinus />
      <Infogram />
      <Network />
      <WaysTo />
      <ActivitiesHome />
      <Sponsors />
      <Footer />
    </Fragment>
  );
};

export default JoinUs;
