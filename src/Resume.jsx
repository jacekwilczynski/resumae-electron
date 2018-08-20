import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Header from './components/Header';

const Resume = ({ name, contactInfo, sections }) => (
  <Fragment>
    <Header caption={name} list={contactInfo} />
    {sections.toString()}
  </Fragment>
);

Resume.propTypes = {
  name: PropTypes.string.isRequired,
  contactInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Resume;
