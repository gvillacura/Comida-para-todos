import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JoinUs from "./components/joinus/JoinUs";
import AboutUs from "./components/about/About";
import Home from "./components/home/Home";
import Catalogue from "./components/catalogue/Catalogue";
import Header from "./components/header/HeaderHome";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about">
          <AboutUs />
        </Route>

        <Route path="/join">
          <JoinUs />
        </Route>

        <Route path="/catalogue">
          <Catalogue />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
