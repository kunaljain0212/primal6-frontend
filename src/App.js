import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import RenderMap from './components/map';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";



const client = new ApolloClient({
  // uri: GRAPHQL_ENDPOINT
  uri: process.env.GRAPHQL_END_POINT,
});


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Switch>
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
    </ApolloProvider>
    
  );
}

export default App;
