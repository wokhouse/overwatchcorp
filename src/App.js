import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import image from './img/cute-little-thing-slower.gif';

const App = ({ className }) => (
  <div className={className}>
    <div className="container content-wrapper">
      <div className="row">
        <div className="col-md-4 text-center text-md-start">
          <h1>Jade Fung</h1>
          <div>
            <a href="mailto:hello@fungj.net">hello@fungj.net</a>
          </div>
          <div>
            <a href="https://github.com/overwatchcorp">github</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/jade-fung/">linkedin</a>
          </div>
        </div>
        <div className="col">
          <p>Jade Fung is a web engineer in Portland, Oregon.</p>
          <p>
            Currently, she is a Soulutions Engineer at Soul Machines.
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
        </div>
      </div>
    </div>
  </div>
);

App.propTypes = {
  className: PropTypes.string.isRequired,
};

const breakpoints = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

export default styled(App)`
  /* @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,900;1,300;1,900&display=swap'); */
  @import url("https://use.typekit.net/dlz1dpe.css");

  background: url(${image});
  background-size: 40%;
  min-height: 100vh;

  font-size: 16pt;
  h1 {
    font-size: 52pt;
  }
  .container {
    max-width: 94%;
  } 
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;

    font-size: 32pt;

    h1 {
      font-size: 102pt;
    }
  }

  /* background: red; */
  h1, h2, h3, h4, h5, h6, svg, .recessed-label {
    font-family: agnamsangjun-plain, serif;
  }

  font-family: serif;

  .content-wrapper {
    background: #FFF;
    padding: 4rem;
  }

`;
