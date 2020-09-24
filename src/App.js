import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JoinUs from './components/joinus/JoinUs';
import AboutUs from './components/about/About';
import Activities from './components/activities/Activities';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
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

        <Route path="/activities">
          <Activities />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
