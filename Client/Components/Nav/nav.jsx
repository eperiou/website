import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="/bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <form
          action="http://www.real-deal.studio"
          method="GET"
        >
          <button
            type="submit"
            className="navbar-brand realdeallogo"
          />
        </form>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/">Portfolio <span className="sr-only">(current)</span></Link>
          </li>
          <li><Link to="/">Personal</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/">Link</Link></li>
          <li className="dropdown">
            <Link
              to="/"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
              <span className="caret" />
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/">Action</Link></li>
              <li><Link to="/">Another action</Link></li>
              <li><Link to="/">Something else here</Link></li>
              <li role="separator" className="divider" />
              <li><Link to="/">Separated link</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
