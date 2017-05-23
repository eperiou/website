import React from 'react';
import { Link } from 'react-router-dom';
import realdeal from '../assets/real-deal-logo.png';

const Nav = () => (
  <nav className="navbar">
    <a
      action="http://www.real-deal.studio"
      type="submit"
    ><button
      className="btn logolink navbar-left nav"
    >
      <img
        className="realdeallogo"
        alt="realdeallogo"
        src={realdeal}
      />My Team
    </button>
    </a>
    <ul className="nav navbar-right nav-tabs">
      <li>
        <Link to="/projects">Portfolio <span className="sr-only">(current)</span></Link>
      </li>
      <li><Link to="/personal">Personal</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>
  </nav>
);

export default Nav;
