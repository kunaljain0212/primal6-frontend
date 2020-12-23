import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import RenderMap from './components/map';
import LandingPage from './views/LandingPage/LandingPage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
              <LandingPage />
            </Route>
        <Route path="/map" component={RenderMap} />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Primal6
            </a>
          </header>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
