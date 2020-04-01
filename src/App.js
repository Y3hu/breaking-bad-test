import React from 'react';
import './App.css';
import EpisodesComponent from './components/episodes'
import HomeComponent from './components/home';
import NavComponent from './components/nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavComponent />
          <Switch>
            <Route path="/episodes">
              <EpisodesComponent />
            </Route>
            <Route path="/">
              <HomeComponent />
            </Route>
          </Switch>  
        </div>
      </Router>
    </div>
  );
}

export default App;
