import React from 'react';
import Nav from './Nav/nav.jsx';
import JumboTron from './Splashpage/JumboTron.jsx';
import Selections from './Splashpage/selections.jsx';

const App = () => (
  <section>
    <Nav />
    <main>
      <JumboTron />
      <Selections />
    </main>
  </section>
);

export default App;
