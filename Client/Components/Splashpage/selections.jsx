import React from 'react';
import { Link } from 'react-router-dom';
import blog from '../assets/blog.png';

const Selections = () => (
  <article className="presentationblocks">
    <section className="row d-flex justify-content-around">
      <div className="presentationtitle">
        <h1>Me in a nutshell</h1>
      </div>
      <div className="col-md-4 presentblock">
        <div className="thumbnail present">
          <img className="img-circle" src="http://res.cloudinary.com/realdeal/image/upload/v1490885825/breadcrumb-logo.gif" alt="breadcrumb-logo" />
          <div className="caption">
            <h2>Sample Projects</h2>
            <p> A sampling of some of my personal projects.
              They have been either solo or in collaboration
            </p>
            <Link
              to="/projects"
              className="btn"
              role="button"
            >Projects</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 presentblock">
        <div className="thumbnail present">
          <img className="img-circle" src="http://res.cloudinary.com/eperiou/image/upload/v1501262858/Profile_ky7kat.jpg" alt="Self-portrait" />
          <div className="caption">
            <h2>Who I am</h2>
            <p>Get to know me</p>
            <Link
              to="/personal"
              className="btn"
              role="button"
            >Personal</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 presentblock">
        <div className="thumbnail present">
          <img
            className="img-circle"
            src={blog}
            alt="blogphoto"
          />
          <div className="caption fixed-bottom">
            <h2>Blog</h2>
            <p>Some topics I&rsquo;ve written about</p>
            <a
              className="btn"
              href="https://medium.com/@eperiou"
              role="button"
            >Blogs</a>
          </div>
        </div>
      </div>
    </section>
  </article>
);

export default Selections;
