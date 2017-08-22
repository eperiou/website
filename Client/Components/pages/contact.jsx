import React from 'react';
import realdeal from '../assets/real-deal-logo.png';

const Contact = () =>
  <article className="contacts center">
    <div className="container">
      <div className="row">
        <img
          className="col-xs-10 col-md-5 media-object image"
          src="http://res.cloudinary.com/eperiou/image/upload/v1503352371/selfie_idmo3p.jpg"
          alt="personalphoto"
        />
        <div className="col-xs-2 col-md-1" />
        <div className="col-xs-10 col-md-5 personaltext">
          <h1 className="media-heading">Contact Me</h1>
          <h3 className="contactinfo">
            <ul><a href="mailto:PeriouEric@gmail.com?subject=EmailFromWebsite" >
              Send me an email.
            </a></ul>
            <ul><a href="https://docs.google.com/document/d/1oozW8yxwUFyF86rIWCF4RPWJpL8U9kl7twN9RLEQE4Y/pub">Check out my Resume.</a></ul>
            <ul><a href="http://github.com/eperiou">Github</a></ul>
            <ul><a href="https://www.linkedin.com/in/eric-periou">Linked-in</a></ul>
            <ul>
              <a href="http://www.real-deal.studio">
                <div className="media" >
                  <div className="media-left">
                    <img
                      className="media-object realdeallogo"
                      alt="realdeallogo"
                      src={realdeal}
                    />
                  </div>
                  <div className="media-body">
                    My Past Collaborations
                  </div>
                </div>
              </a>
            </ul>
          </h3>
        </div>
      </div>
    </div>
  </article>;

export default Contact;
