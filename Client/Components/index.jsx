import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';

import Css from './style/style.css';
import Routes from './Router.jsx'
// AppContainer is a necessary wrapper component for HMR

// import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Routes);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Router.jsx', () => {
    render(Routes);
  });
}

// ReactDOM.render(<Routes /> , document.getElementById('app'));
