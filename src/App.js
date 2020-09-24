import React from 'react';
import './App.css' 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* import BboysList from './components/BboysList' */
import Header from './components/header'
import Ranking from './components/Ranking/Ranking'
export default function App() {
  return (
    <Router>
      <main className="container">
        <Header />
        <Switch>
          <Route path="/">
            
            <div className="content">
              <div className="">
                Hola
              </div>
              <Ranking />
            </div>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}