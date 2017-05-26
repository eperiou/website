/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "css" }]*/
/* global document */
import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';

import css from './Style/style.css';
import Routes from './Router';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(Routes);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Router.jsx', () => {
    render(Routes);
  });
}
