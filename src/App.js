import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const App = ({ className }) => (
  <div className={className}>
    <div className="container content-wrapper">
      <div className="row">
        <Link to="/" className="text-decoration-none text-dark"><h1>🧧Jade Fung</h1></Link>
        <div className="d-flex">
          <a className="me-2" href="mailto:hello@fungj.net">hello@fungj.net</a>
          <a className="me-2" href="https://github.com/overwatchcorp">github</a>
          <a className="me-2" href="https://www.linkedin.com/in/jade-fung/">linkedin</a>
          <Link to="cv" className="me-2">cv</Link>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col">
          <p>Jade Fung is a web engineer in Portland, Oregon.</p>
          <p>
            Currently, she is a Solutions Engineer at Soul Machines.
            She builds user interfaces for their digital people.
          </p>
          <p>
            She graduated from Reed College in 2020 with a Bachelors of Arts in Psychology.
            Her thesis was&nbsp;
            <i>
              Pronouns Good or Bad: Attitudes and Relationships with
              Gendered Pronouns in Gender-Diverse Undergraduates
            </i>
            .
          </p>
          <p>
            She has experience with frontend and full-stack Javascript engineering,
            with a special focus on React and Redux.
          </p>
        </div>
      </div>
    </div>
  </div>
);

App.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(App)`
  /* @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,900;1,300;1,900&display=swap'); */
  @import url("https://use.typekit.net/dlz1dpe.css");

  min-height: 100vh;

  .container {
    max-width: 94%;
  } 
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;


  .content-wrapper {
    background: #FFF;
    padding: 4rem;
  }

`;
