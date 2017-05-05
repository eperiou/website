import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './Splashpage/App';
import Err from './Nav/error';
import Nav from './Nav/nav';

const Approutes = () =>
  <BrowserRouter
    history={createHistory}
  >
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={App} />
        <Route component={Err} />
      </Switch>
    </div>
  </BrowserRouter>;

export default Approutes;
