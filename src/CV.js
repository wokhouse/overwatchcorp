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
          <h3>Projects</h3>
          <div>
            <b>Large Project for a University</b>
            <div>
              - Inherited and quickly learned to modify Rasa NLP implementation
            </div>
            <div>
              - Managed UI and NLP development on tight timeline
            </div>
            <div>
              - Developed and oversaw testing program, including folding testing results
              back into NLP model
            </div>
          </div>
          <div>
            <b>Complete Re-Write of UI template</b>
            <div>
              - Completely re-wrote a popular React UI template to improve developer experience
              and reduce component inter-dependence.
            </div>
            <div>
              - Identified and addressed pain points that reduced template flexibility in novel
              projects and proof-of-concepts.
            </div>
            <div>
              - Worked with other engineering teams to communicate findings and guided their
              work to be more relevant to sales and implementation engineers.
            </div>
          </div>
          <div>
            <b>Proof-of-Concept for a Large Bank</b>
            <div>
              - Integrated Salesforce Chat Client API into existing interface
            </div>
            <div>
              - Injected and extracted state data from opaque API
            </div>
          </div>
          <div>
            <b>Project for a Weird Big Corporation</b>
            <div>
              - Implemented large, non-linear corpus in Dialogflow
            </div>
            <div>
              - Ideated and implemented novel method of navigating between arbitrary
              locations in corpus using custom fulfillment
            </div>
          </div>
          <div>
            <b>Javascript-based NLG template system</b>
            <div>
              - Created mini-programing language to allow for
              portable, complex, and hierarchical rules in plain JSON
            </div>
            <div>
              - Wrote test suite with unit, integration, and functional tests that achieved
              &gt;85% coverage.
            </div>
          </div>
          <div>
            <b>Undergraduate Thesis: </b>
            <div>
              <i>
                Pronouns, Good or Bad? Attitudes and Relationships with
                Gendered Pronouns in Gender-Diverse Undergraduates
              </i>
            </div>
            <div>
              - Researched and extrapolated from sparse literature to develop instruments to
              measure attitudes towards gendered pronouns
            </div>
            <div>
              - Achieved highest known participation rate in a thesis studying
              Reed undergraduate population.
            </div>
            <div>
              - Delivered targeted findings and recommendations to institution for fostering a
              safe environment for sharing pronouns and other aspects of gender identity.
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <h3>Skills</h3>
        <ul>
          <li>
            Frontend Engineering: React, Redux.
            Has wide conceptual understanding of how frontend and backend interact.
          </li>
          <li>
            Backend Engineering: NodeJS, Python.
            Experienced building, deploying, and containerizing services on AWS and Google Cloud.
          </li>
          <li>Natural Language Processing: Rasa, Dialogflow</li>
          <li>Data Analysis: R, Python, Qualtrics</li>
        </ul>
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

  .text-serif {
    font-family: serif;
  }

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
