import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import RenderMap from './views/MapPage/MapPage';
import LandingPage from './views/LandingPage/LandingPage';
import alertBox from './components/alertBox/alertBox';
import AttEmg from './components/AttEmg/AttEmg';
// import ProfileEmg from './components/ProfileEmg/ProfileEmg';
import EmgReq from './components/EmergencyRequest/EmgReq';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import Profile from './components/Profile/Profile';
import Map from './components/map/Map';

const link = createHttpLink({
  uri: 'http://localhost:8000/graphql',
  credentials: 'include',
});

const client = new ApolloClient({
  // uri: GRAPHQL_ENDPOINT
  link,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/map" component={RenderMap} />
            <Route path="/alertBox" component={alertBox} />
            <Route path="/AttEmg" component={AttEmg} />
            {/* <Route path="/ProfileEmg" component={ProfileEmg} /> */}
            <Route path="/EmgReq" component={EmgReq} />
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
      </div>
    </ApolloProvider>
  );
}

export default App;
