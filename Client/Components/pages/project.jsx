import React from 'react';
import { Link } from 'react-router-dom';

// TODO: add in prop validations


const Projects = ({projectnumber, project: { title, captions, explanation, images } }) => (
  <article>
    <div className="container jumbo-container">
      <h1 className="project-title">{title}</h1>
      <div>
        <h2 className="col-lg-4">{explanation}</h2>
        <div id={`myCarousel${projectnumber}`} className={`carousel slide col-lg-8 ${projectnumber}`}>
          {/* <!-- Indicators --> */}
          <ol className="carousel-indicators">
            {images.map((caption, ind) => (
              ind === 0 ? (<li data-target={`#myCarousel${projectnumber}`} data-slide-to={ind} className="active" />)
                : (<li data-target={`#myCarousel${projectnumber}`} data-slide-to={ind} />)

            ))}
          </ol>

          {/* <!-- Wrapper for slides --> */}
          {/* TODO add in captions for the photos */}
          <div className="carousel-inner" >
            {images.map((image, ind) => (
              ind === 0 ?
                (<div className="item active">
                  <img className="d-block img-fluid" src={image} alt="Los Angeles" />
                </div>)
              :
              (<div className="item">
                <img className="d-block img-fluid" src={image} alt="Los Angeles" />
              </div>)
          ))}
          </div>


          {/* <!-- Left and right controls --> */}
          <a className="left carousel-control" href={`#myCarousel${projectnumber}`} data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href={`#myCarousel${projectnumber}`} data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* <div className="col-lg-8 jumbotron project-image" /> */}
      </div>
      <p><Link
        className="btn btn-primary btn-lg"
        to="http://breadcrumb.real-deal.studio"
        role="button"
      >Check it out Live!</Link></p>
    </div>
  </article>
);

export default Projects;
