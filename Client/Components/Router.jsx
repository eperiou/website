import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './Splashpage/App';
import Err from './Nav/error';
import Nav from './Nav/nav';
import Personal from './pages/personal';
import Projects from './pages/projects';
import Contact from './pages/contact';

const Approutes = () =>
  <BrowserRouter
    history={createHistory}
  >
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/personal" exact component={Personal} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        <Route component={Err} />
      </Switch>
      <section className="thevoid" />
    </div>
  </BrowserRouter>;

export default Approutes;
