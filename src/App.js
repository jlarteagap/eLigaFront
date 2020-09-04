import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BboysList from './components/BboysList'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <BboysList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}