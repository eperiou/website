import React from 'react';
import { Link } from 'react-router-dom';
// import realdeal from '../assets/real-deal-logo.png';

const Nav = () => (
  <nav className="navbar">
    <a
      href="https://github.com/eperiou/website"
    >
      <img
        style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
        src="https://camo.githubusercontent.com/121cd7cbdc3e4855075ea8b558508b91ac463ac2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f677265656e5f3030373230302e706e67"
        alt="Fork me on GitHub"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_green_007200.png"
      /></a>
    <ul className="nav navbar-right nav-tabs">
      <li>
        <Link to="/projects">Portfolio <span className="sr-only">(current)</span></Link>
      </li>
      <li><Link to="/personal">Personal</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>
  </nav>
);

export default Nav;
