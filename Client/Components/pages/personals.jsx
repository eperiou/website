import React from 'react';
import PropTypes from 'prop-types';

const Personals = ({
  number,
  description: {
    header,
    image,
    description,
},
}) => {
  if (number % 2 === 0) {
    return (
      <article className="personals">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <a href="/personals">
              <img className="media-object image" src={image} alt={header} />
            </a>
          </div>
          <div className="col-xs-12 col-md-6 personaltext">
            <h1 className="media-heading">{header}</h1>
            <p>{description}</p>
          </div>
        </div>
      </article>
    );
  }
  return (
    <article className="personals">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <h1 className="media-heading">{header}</h1>
          <p>{description}</p>
        </div>
        <div className="col-xs-12 col-md-6">
          <a href="/personals">
            <img className="media-object image" src={image} alt={header} />
          </a>
        </div>
      </div>
    </article>
  );
};

Personals.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.shape({
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};


export default Personals;
