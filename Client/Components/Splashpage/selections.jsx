import React from 'react';

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
            <p>
              <a
                href="/projects"
                className="btn btn-primary"
                role="button"
              >Button
             </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 presentblock">
        <div className="thumbnail present">
          <img className="img-circle" src="https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/17799456_10107185745455535_7636326125634574051_n.jpg?oh=93eb539aec7ff3a8b57064dca6b79a98&oe=597818B0" alt="Self-portrait" />
          <div className="caption">
            <h2>Who I am</h2>
            <p>Get to know me</p>
            <p>
              <a
                href="/personal"
                className="btn btn-primary"
                role="button"
              >Button</a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 presentblock">
        <div className="thumbnail present">
          <img className="img-circle" src="..." alt="..." />
          <div className="caption fixed-bottom">
            <h2>Blog</h2>
            <p>Some topics I&rsquo;ve written about</p>
            <p>
              <a
                href="https://medium.com/@eperiou"
                className="btn btn-primary"
                role="button"
              >Blogs</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </article>
);

export default Selections;
