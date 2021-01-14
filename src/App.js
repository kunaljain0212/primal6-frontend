import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import RenderMap from './views/MapPage/MapPage';
import LandingPage from './views/LandingPage/LandingPage';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Profile from './components/Profile/Profile';
import Map from './components/map/Map';

const client = new ApolloClient({
  // uri: GRAPHQL_ENDPOINT
  uri: process.env.GRAPHQL_END_POINT,
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/map" component={RenderMap} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/maps/v2">
              <Map />
            </Route>
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
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
