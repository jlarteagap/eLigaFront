import React from 'react';
import './App.css' 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BboysList from './components/BboysList'
import Header from './components/header'
export default function App() {
  return (
    <Router>
      <main className="container">
        <Header />
        <Switch>
          <Route path="/">
            <BboysList />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}