import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import RenderMap from './components/map';
import LandingPage from './views/LandingPage/LandingPage';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Profile from './components/Profile/Profile';

const client = new ApolloClient({
  // uri: GRAPHQL_ENDPOINT
  uri: 'http://localhost:8000/graphql',
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
            <Route path="/profile" component={Profile} />
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
