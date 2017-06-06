import React from 'react';
import PropTypes from 'prop-types';

const Projects = (
  {
    projectnumber,
    project: {
      title,
      captions,
      explanation,
      images,
      link,
    },
    }) => (
      <article>
        <div className="container jumbo-container">
          <div className="col-lg-4">
            <h1 className="project-title">{title}</h1>
            <div className="project-explanation">{explanation}</div>
          </div>
          <div className="col-lg-4 carouselbox">
            <div id={`myCarousel${projectnumber}`} className={`carousel slide ${projectnumber}`}>
              {/* <!-- Indicators --> */}
              <ol className="carousel-indicators">
                {images.map((caption, ind) => (
                  ind === 0 ? (<li data-target={`#myCarousel${projectnumber}`} data-slide-to={ind} className="active" />)
                    : (<li data-target={`#myCarousel${projectnumber}`} data-slide-to={ind} />)

                ))}
              </ol>
              {/* <!-- Wrapper for slides needed to have first be active to set carousel --> */}
              <div className="carousel-inner" >
                {images.map((image, ind) => (
                  ind === 0 ?
                    (<div className="item active">
                      <img
                        className="d-block img-fluid projectphoto"
                        key={captions[ind]}
                        src={image}
                        alt={captions[ind]}
                      />
                    </div>)
                  :
                  (<div className="item">
                    <img
                      className="d-block img-fluid projectphoto"
                      key={captions[ind]}
                      src={image}
                      alt={captions[ind]}
                    />
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
            <p><a
              className="btn btn-lg"
              href={link}
            >Check it out Live!</a></p>
          </div>
        </div>
      </article>
);

Projects.propTypes = {
  projectnumber: PropTypes.number.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    captions: PropTypes.array.isRequired,
    explanation: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Projects;
