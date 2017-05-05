import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import App from './App.jsx'
import Err from './Nav/error.jsx';
import Nav from './Nav/nav.jsx';

const Approutes = () =>
  <div>
    <div>
      <Nav />
    </div>
    <BrowserRouter
      history={createHistory}
    >
      <Switch>
        <Route path="/" exact component={App} />
        <Route component={Err} />
      </Switch>
    </BrowserRouter>;
  </div>;

export default Approutes;
