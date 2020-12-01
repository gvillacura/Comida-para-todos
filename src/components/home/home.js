import React, { Fragment } from "react";
import Slider from "./Carousel";
import AboutHome from "./AboutHome";
import ActivitiesHome from "./ActivitiesHome";
import JoinusHome from "./JoinusHome";
import Footer from "../footer/Footer";
import Infogram from "./Infogram";
import Sponsors from "./Sponsors";

const Home = () => {

  const textA = "NUESTROS";
  const textB = "COLABORADORES";
  
  return (
    <Fragment>
      <Slider />
      <Infogram />
      <AboutHome />
      <ActivitiesHome />
      <JoinusHome />
      <Sponsors text1={textA} text2={textB}/>
      <Footer />
    </Fragment>
  );
};

export default Home;
